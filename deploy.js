var AWS = require('aws-sdk');
var fs = require('fs');
var crypto = require('crypto');

var s3 = new AWS.S3();

async function upload(bucket, key) {
  console.log('Upload file: ' + key);
  return new Promise((resolve, reject) => {
    fs.readFile(key, function (err, data) {
      if (err) {
        console.error('Cannot read file: ' + key);
        reject(err);
      } else {
        var s3File = {
          Bucket: bucket,
          Key: key,
          ACL: 'public-read',
          Body: data
        };
        s3.putObject(s3File, function (err, data) {
          if (err) {
            console.error('Cannot upload: ' + key);
            reject(err);
          } else {
            console.log('Uploaded: ' + key);
            resolve(data);
          }
        });
      }
    });
  })
}


function getFileHash(filename) {
  var data = fs.readFileSync(filename);
  return crypto.createHash('md5').update(data).digest('hex');
}

async function processDirectory(newTrackFile, oldTrackFile, toBeUploaded, dir) {
  console.log('Process directory: ' + dir);
  return new Promise((resolve, reject) => {
    fs.readdir(dir).then((children) => {
      children.forEach((child, index) => {
        var path;
        if (dir === '.') {
          path = child;
        } else {
          path = dir + '/' + child;
        }
        if (fs.lstatSync(path).isDirectory()) {
          await processDirectory(newTrackFile, oldTrackFile, toBeUploaded, path);
        } else {
          processFile(newTrackFile, oldTrackFile, toBeUploaded, path);
        }
      });
      resolve(children);
    });
  });
}

function processFile(newTrackFile, oldTrackFile, toBeUploaded, path) {
  var hash = getFileHash(path);
  // keep hash
  newTrackFile[path] = hash;
  // check modified
  if (oldTrackFile[path] != hash) {
    toBeUploaded.push(path);
  }
}

async function uploadTrackFile(trackFile, content) {
  fs.writeFileSync(trackFile, JSON.stringify(content));
  return upload(bucket, trackFile);
}

async function run() {

  var bucket = process.argv[2];
  var trackFile = process.argv[3] + '.json'; // branch name or PR ID

  var s3TrackFile = {
    Bucket: bucket,
    Key: trackFile
  };
  s3.getObject(s3TrackFile, function (err, data) {

    var oldTrackFile;
    if (err) {
      console.error('Cannot get file: ' + trackFile, err);
      oldTrackFile = {};
    } else {
      console.log('Retrieved file: ' + trackFile);
      oldTrackFile = JSON.parse(data.Body.toString());
    }

    // delete the old track file in case this process is interrupted,
    // the next one will start over
    await uploadTrackFile(trackFile, {});

    var newTrackFile = {};
    var toBeUploaded = [];
    processDirectory(newTrackFile, oldTrackFile, toBeUploaded, '.');

    toBeUploaded.forEach((item) => {
      await upload(bucket, item);
    });

    await uploadTrackFile(trackFile, newTrackFile);
  });
}

await run();
