pipeline{
    options{
        disableConcurrentBuilds()
    }
    stages{
        stage("install dependencies"){
            agent{
                docker{
                    image 'node:20.11.1-alpine3.19' 
                    reuseNode true
                }
            }
            stages{
                stage('Instalar dependencias'){
                    steps{
                        sh 'npm install'
                    }
                }
            }
        }
        stage("Test"){
            stages{
                stage('ejecutando test'){
                    steps{
                        sh 'npm run test'
                    }
                }
            }
        }
        stage("Build"){
            stages{
                stage('construyendo'){
                    steps{
                        sh 'npm run build'
                    }
                }
            }
        }
        //stage('Code Quality'){
            
        //}
    }
}