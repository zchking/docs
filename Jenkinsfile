pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    bat 'bundle exec jekyll serve'
                }
            }
        }
    }
}
