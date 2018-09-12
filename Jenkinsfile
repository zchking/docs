pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('jekyll/jekyll').inside {
                        sh 'bundle install'                        
                        sh 'jekyll build'
                    }
                }
            }
        }
        
        stage('Upload S3') {
            when { branch 'master' }
            steps {
                script {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:'')
                    }
                }
            }
        }
        
        stage('Index algolia') {
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside {
                        sh 'bundle install'                        
                        sh 'jekyll algolia'
                    }
                }
            }
        }
    }
}
