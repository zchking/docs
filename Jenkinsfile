pipeline {
    agent {
        docker { 
            image 'jekyll/jekyll:latest'
            args '--rm --volume="/C:/D/work/docs:/srv/jekyll"'
        }
    }
    stages {
        stage('Test') {
            steps {
                echo 'hello'
            }
        }
    }
}
