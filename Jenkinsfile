pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/vickiee/https://github.com/vickiee07/Create-a-Simple-Jenkins-Pipeline-for-CICD_-',
                    credentialsId: 'github-cred'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("my-app:070")
                }
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            
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
