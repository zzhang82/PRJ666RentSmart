pipeline {
  agent {
    docker {
      image 'pivotalpa/angular-cli'
      args '-u 0:0'
    }

  }
  stages {
    stage('Build on the server') {
      steps {
        sh 'ng serve'
      }
    }
  }
}