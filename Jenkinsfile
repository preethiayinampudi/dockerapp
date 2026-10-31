pipeline {
    agent any
    environment {
        IMAGE_NAME = 'student-management-app'
    }
    stages {
        stage('Install Dependencies') { steps { sh 'npm install' } }
        stage('Run Tests') { steps { sh 'npm test' } }
        stage('Build Docker Image') { steps { sh "docker build -t \:\ ." } }
    }
}