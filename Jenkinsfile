pipeline{
    agent any
    stages{
        stage('checkout Code'){
            steps{
                git branch: 'main' , url: 'https://github.com/AnnaReddybandi/web-app2.git'
            }

        }
         stage('Build Docker Image'){
            steps{
                sh 'docker build -t webapp2:latest .'
            }
        }
         stage('Test'){
            steps{
                sh '''
             docker run -d --name temp_webapp2 -p 8082:80 webapp2:latest
             sleep 5
             curl -I http://localhost:8082 | grep "200 OK"
                docker stop temp_webapp2
                docker rm temp_webapp2
                '''
            }
        }
         stage('Deploy'){
            steps{
                sh '''
      docker stop webapp2 || true
      docker rm webapp2  || true
      docker run -d --name webapp2 -p 8092:80 webapp2:latest
                '''
            }
            
        }
    }
}
