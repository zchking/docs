pipeline {

    agent any

    stages {

        stage('Clean') {
            steps {
                sh 'rm -rf _site'
            }
        }

        stage('Build staging') {
            when {
                not {
                    branch 'master'
                }
            }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"') {
                        sh 'bundle install'
                        sh 'bundle exec jekyll build'
                        sh 'chmod u+x ./build.sh && ./build.sh'
                        sh 'mv _site/robots-staging.txt _site/robots.txt'
                    }
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:'')
                    }
                }
            }
        }

        stage('Build production') {
            when { branch 'master' }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"') {
                        sh 'bundle install'
                        sh 'bundle exec jekyll build'
                    }
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs.katalon.com', path:'', acl:'PublicRead')
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
                        sh 'bundle install'
                        sh 'bundle exec jekyll clean'
                        sh 'bundle exec jekyll algolia'
                    }
                }
            }
        }
    }
}
