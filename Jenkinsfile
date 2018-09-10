pipeline {
    agent any
    stages {
        stage('Build Docker') {
            steps {
                script {
                    docker.image('jekyll/jekyll').inside{
                        sh 'bundle install'                        
                        sh 'jekyll build'
                        sh 'ls'
                    }
                }
            }
        }
    }
}
