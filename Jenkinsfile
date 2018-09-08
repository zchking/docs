pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('node:7-alpine').inside {
                        sh 'node --version'
                    }
                }
            }
        }
    }
}
