pipeline {
    agent {
        docker { 
            image 'jekyll/jekyll' 
            args '--rm --volume="/C:/D/work/docs:/srv/jekyll"'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'hello'
            }
        }
    }
}
