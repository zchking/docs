pipeline {
    agent {
        docker { 
            image 'jekyll/jekyll:latest'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'bundle exec jekyll build'
            }
        }
    }
}
