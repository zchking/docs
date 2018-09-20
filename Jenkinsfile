pipeline {

    agent any

    stages {

        stage('Clean') {
            steps {
                sh 'rm -rf _site'
            }
        }

        stage('Build') {
            when { branch 'staging' }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"') {
                        sh 'bundle update'
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

        stage('Index') {
            when { branch 'master' }
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"') {
                        sh 'bundle update'
                        sh 'jekyll algolia'
                    }
                }
            }
        }
    }
}
