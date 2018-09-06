pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'bundle exec jekyll serve'
                }
            }
        }
    }
}
