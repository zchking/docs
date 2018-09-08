pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    sh 'docker run --rm -it jekyll/jekyll jekyll build'
                }
            }
        }
    }
}
