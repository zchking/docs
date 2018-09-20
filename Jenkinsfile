pipeline {

    agent any

    stages {

        stage('Clean') {
            steps {
                sh 'rm -rf _site'
            }
        }

        stage('Build Docker') {
            when { branch 'staging' }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll"') {
                        sh 'bundle install'
                        sh 'jekyll build'
                        sh 'mv _site/robots-staging.txt _site/robots.txt'
                    }
                }
            }
        }

        stage('Upload S3') {
            when { branch 'staging' }
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
            when { branch 'master' }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll"') {
                        sh 'bundle install'
                        sh 'jekyll algolia'
                    }
                }
            }
        }
    }
}
