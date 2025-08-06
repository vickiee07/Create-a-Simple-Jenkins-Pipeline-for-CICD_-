pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/vickiee/my-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("my-app:070)
                }
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                // Example: sh 'npm test' OR sh 'pytest' OR sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying container..."
                    sh "docker run -d -p 8080:8080 my-app:070"
                }
            }
        }
    }
}
