pipeline {
    agent {
        docker { image 'jekyll/jekyll' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'bundle --version'
            }
        }
    }
}
