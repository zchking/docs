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
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            steps {
                sh "mkdir -p _site/${env.BRANCH_NAME}"
                sh 'bundle exec jekyll clean'
                sh "bundle exec jekyll build --baseurl /${env.BRANCH_NAME} --destination _site/${env.BRANCH_NAME}"
            }
            post {
                success {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs-staging.katalon.com', path:'', acl:'PublicRead')
                        s3Upload(file:'robots.txt', bucket:'docs-staging.katalon.com', path:'', acl:'PublicRead')
                    }
                }
            }
        }

        stage('Build production') {
            when { branch 'master' }
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            steps {
                sh 'bundle exec jekyll clean'
                sh 'bundle exec jekyll build --config _config.yml,_config_prod.yml'
                sh 'rm -rfv _site/robots.txt'
            }
            post {
                success {
                    withAWS(region: 'us-east-1', credentials: 'aws-docs-staging') {
                        s3Upload(file:'_site', bucket:'docs.katalon.com', path:'', acl:'PublicRead')
                        cfInvalidate(distribution:'E39AGUOIPSZ2OA', paths:['/*'])
                    }
                }
            }
        }

        stage('Index production') {
            when { branch 'master' }
            agent {
                dockerfile {
                    filename 'Dockerfile'
                }
            }
            environment {
                ALGOLIA_API_KEY = credentials('algolia-api-key')
            }
            steps {
                sh 'bundle exec jekyll clean'
                sh 'bundle exec jekyll algolia --config _config.yml,_config_prod.yml --verbose'
            }
        }
    }
}
