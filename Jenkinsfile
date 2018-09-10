pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('jekyll/jekyll').inside{
                        sh 'bundle install'                        
                        sh 'jekyll build'
                        sh 'ls'
                    }
                }
            }
        }
        
        stage('Upload S3') {
            steps {
                script {
                    withAWS(region: 'ap-southeast-1', credentials: 'aws') {
                        files = s3FindFiles(bucket:'katalon-analytics-local')
                        echo files
                    }
                }
            }
        }
    }
}
