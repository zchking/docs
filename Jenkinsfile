pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('jekyll/jeyll').inside {
                        sh 'pwd'
                        sh 'bundle --version'
                    }
                }
            }
        }
    }
}
