pipeline {
  agent {
    docker { 
      image 'node:14-alpine'
    }
  }
  environment {
    CI = "true"
  }
  stages {
    stage('Test') {
      steps {
        sh 'yarn'
        sh 'yarn test'
      }
    }
  }
}