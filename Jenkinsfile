pipeline {

    agent {
        docker {
            image 'jekyll/jekyll'
            args '-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"'
        }
    }

    stages {

        stage('Clean') {
            steps {
                sh 'rm -rf _site'
            }
        }

        stage('Build Staging') {
            when { branch 'staging' }
            steps {
                sh 'bundle update'
                sh 'jekyll build'
                sh 'mv _site/robots-staging.txt _site/robots.txt'
            }
        }

        stage('Deploy Staging') {
            when { branch 'staging' }
            agent any
            steps {
                script {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:'')
                    }
                }
            }
        }

        stage('Index Production') {
            when { branch 'master' }
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                sh 'bundle update'
                sh 'jekyll algolia'
            }
        }
    }
}
