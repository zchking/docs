var AWS = require('aws-sdk');
var fs = require('fs');
var crypto = require('crypto');
var s3 = new AWS.S3();

var bucket = process.argv[2];

var site = process.argv[3]; // branch name or PR ID

var hash_file_new = {};

var hash_file_old = {};

var list_file_upload = [];

var hash_file = site + '.json';

function upload(Bucket, Key) {
  console.log('Upload file: ' + Key);
  return new Promise((resolve, reject) => {
    fs.readFile(Key, function (err, data) {
      if (err) {
        console.error('Cannot read file: ' + Key);
        reject(err);
      }
      var params = {
        Bucket: Bucket,
        Key: Key,
        ACL: 'public-read',
        Body: data
      };
      s3.putObject(params, function (err, data) {
        if (err) {
          console.error('Cannot upload: ' + Key);
          reject(err);
        } else {
          console.log('Uploaded: ' + Key);
          resolve(data);
        }
      });

    });
  })
}


function getFileHash(filename) {
  var data = fs.readFileSync(filename);
  return crypto.createHash('md5').update(data).digest('hex');
}

function processDirectory(dir) {
  var children = fs.readdirSync(dir);
  children.forEach((child, index) => {
    var path = dir + '/' + child;
    if (fs.lstatSync(path).isDirectory()) {
      processDirectory(path);
    } else {
      processFile(path);
    }
  });
}

function processFile(path) {
  var hash = getFileHash(path);
  // keep hash
  hash_file_new[path] = hash;
  // check modified
  if (hash_file_old[path] != hash) {
    list_file_upload.push(path);
  }
}

function run() {
  var params = {
    Bucket: bucket,
    Key: hash_file
  };
  s3.getObject(params, function (err, data) {
    if (err) {
      console.error("Cannot get file: " + hash_file, err);
    } else {
      console.log("Retrieved file: " + hash_file);
      hash_file_old = JSON.parse(data.Body.toString());
    }

    processDirectory(site);

    //upload all of file to S3
    var list_promise_upload_file = list_file_upload.map((item) => {
      upload(bucket, item);
    });

    //upload new hashfile to server only finished upload all file
    Promise.all(list_promise_upload_file).then(() => {
      //write new hashfile.json
      fs.writeFileSync(hash_file, JSON.stringify(hash_file_new));
      upload(bucket, hash_file);
    });

  });
}

run();
