pipeline {
    agent {
        docker { image 'jekyll/jekyll' }
    }
    stages {
        stage('Build') {
            steps {
                sh 'jekyll --version'
            }
        }
    }
}
