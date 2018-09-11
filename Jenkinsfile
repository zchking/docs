pipeline {
    agent any
    stages {
        stage('Build Docker') {
            when { branch 'master' }
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
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:'')
                    }
                }
            }
        }
    }
}
