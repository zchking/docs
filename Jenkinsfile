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
                        sh 'bundle exec jekyll clean'
                        sh "bundle exec jekyll build --baseurl /${env.BRANCH_NAME}"
                    }
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:"/${env.BRANCH_NAME}", acl:'PublicRead')
                    }
                }
            }
        }

        stage('Build production') {
            when { branch 'master' }
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('-v="$PWD:/srv/jekyll" -v="$HOME/.katalon_docs_bundle:/usr/local/bundle"') {
                        sh 'bundle install'
                        sh 'bundle exec jekyll clean'
                        sh 'bundle exec jekyll build'
                        sh 'rm -rfv _site/robots.txt'
                    }
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs.katalon.com', path:'', acl:'PublicRead')
                    }
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        cfInvalidate(distribution:'E39AGUOIPSZ2OA', paths:['/*'])
                    }
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
