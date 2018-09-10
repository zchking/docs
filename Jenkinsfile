pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('jekyll/jekyll').inside('--volume="$PWD:/srv/jekyll"') {
                        sh 'bundle --version'
                    }
                }
            }
        }
    }
}
