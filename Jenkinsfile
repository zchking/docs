pipeline {
    agent {
        docker { 
            image 'jekyll/jekyll:latest'
        }
    }
    stages {
        stage('Test') {
            steps {
                sh 'jekyll --version'
            }
        }
    }
}
