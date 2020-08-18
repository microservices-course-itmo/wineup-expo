pipeline {
  agent {
    docker { 
      image 'node:14-alpine'
    }
  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
        sh 'which yarn'
      }
    }
    stage('Build') {
      steps {
        sh "Need to implement"
      }
    }
    stage('Deploy') {
      steps {
        sh "Need to implement"
      }
    }
  }
}