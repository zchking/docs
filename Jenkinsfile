pipeline {
    agent {
        docker { 
            image 'jekyll/jekyll:latest'
            args '--rm'
        }
    }
    stages {
        stage('Test') {
            steps {
                jekyll build
            }
        }
    }
}
