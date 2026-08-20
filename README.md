# 🎬 MovieList API

MovieList is a **Node.js backend application** for managing movie data while integrating with the **TMDB API** for external movie information.

The project was also used as a hands-on **Backend + DevOps deployment project**, covering containerization, CI/CD, Kubernetes deployment, AWS infrastructure concepts, Linux, networking, and application troubleshooting.

---

## 🚀 Features

* RESTful APIs for movie management
* Create, read, update, and delete movie data
* MongoDB database integration
* Authentication and protected routes
* Request validation using AJV
* TMDB API integration
* Centralized Express backend structure
* Environment-based configuration
* Docker containerization
* Kubernetes deployment using Minikube
* Jenkins CI/CD practice
* Git and GitHub workflow
* Linux and networking troubleshooting

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* AJV
* JWT Authentication
* TMDB API

### DevOps

* Git
* GitHub
* Docker
* Kubernetes
* Minikube
* Jenkins
* Linux
* AWS
* Terraform
* CloudWatch

---

## 🏗 Architecture

```text
Client
   |
   v
Express REST API
   |
   +---- Authentication / Middleware
   |
   +---- Request Validation
   |
   +---- Controllers / Business Logic
   |
   +---- MongoDB
   |
   +---- TMDB External API
```

For the DevOps workflow:

```text
Developer
    |
    v
   Git
    |
    v
 GitHub
    |
    v
 Jenkins
    |
    v
 Docker Image
    |
    v
Container / Kubernetes
    |
    v
Application
```

---

## 📂 Project Structure

```text
MovieList/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── config/
│
├── app.js
├── package.json
├── Dockerfile
├── .gitignore
└── README.md
```

> The exact directory structure may vary as the project continues to evolve.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

Move into the project directory:

```bash
cd Movielist
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the project root.

Example:

```env
PORT=5003

MONGO_URI=your_mongodb_connection_string

TMDB_API_KEY=your_tmdb_api_key

JWT_SECRET=your_jwt_secret
```

> Never commit the `.env` file to GitHub.

---

### 4. Start the application

```bash
npm start
```

The API runs locally on:

```text
http://localhost:5003
```

---

## 🐳 Docker

The application can be containerized using Docker.

### Build the image

```bash
docker build -t movielist .
```

### Run the container

```bash
docker run -p 5003:5003 --env-file .env movielist
```

### Check running containers

```bash
docker ps
```

### Check all containers

```bash
docker ps -a
```

### View application logs

```bash
docker logs <container-name>
```

Docker troubleshooting performed during the project included:

* Container startup issues
* Stopped vs running containers
* Application port mapping
* Environment variables
* MongoDB connectivity
* Container logs
* Image/container lifecycle

---

## ☸️ Kubernetes

MovieList was also used for hands-on Kubernetes deployment practice using **Minikube**.

The deployment included concepts such as:

* Kubernetes Deployments
* Pods
* Services
* NodePort
* Docker images
* Application replicas
* Container ports
* Kubernetes troubleshooting

Useful commands:

```bash
kubectl get pods
```

```bash
kubectl get deployments
```

```bash
kubectl get services
```

```bash
kubectl describe pod <pod-name>
```

```bash
kubectl logs <pod-name>
```

One of the areas explored during deployment was troubleshooting container images, application ports, Kubernetes networking, and application connectivity.

---

## 🔄 CI/CD with Jenkins

Jenkins was used to practice CI/CD concepts around the project.

The workflow focuses on:

```text
Code Change
    ↓
Git Commit
    ↓
GitHub
    ↓
Jenkins Pipeline
    ↓
Build / Deployment Process
```

This provided hands-on experience with:

* Jenkins pipelines
* GitHub integration
* Automated build workflow
* Docker-based deployment concepts
* CI/CD troubleshooting

---

## ☁️ AWS & Infrastructure

MovieList is also being used to practice deploying and operating a backend application using AWS infrastructure.

Infrastructure topics explored include:

* EC2
* VPC
* Public and private subnets
* Route tables
* Internet Gateway
* NAT
* Security Groups
* IAM
* Linux server administration
* CloudWatch monitoring
* CloudWatch alarms

Terraform is used as part of the infrastructure-learning workflow to understand **Infrastructure as Code (IaC)** and repeatable AWS infrastructure provisioning.

---

## 📊 Monitoring

The project is also being used to understand application and infrastructure monitoring concepts.

Monitoring work includes:

* Application logs
* Docker logs
* Linux system monitoring
* AWS CloudWatch
* Infrastructure alarms
* Application availability troubleshooting

Additional observability tooling can be added as the deployment evolves.

---

## 🔐 Security Practices

The project follows basic backend and DevOps security practices including:

* Environment variables for secrets
* `.env` excluded through `.gitignore`
* Protected API routes
* JWT-based authentication
* Request validation
* AWS Security Groups
* IAM permissions
* No credentials stored directly in the repository

---

## 🧠 What I Learned

This project helped me combine backend development with practical DevOps workflows.

Some of the main areas I worked on include:

* Building REST APIs with Node.js and Express
* Connecting applications to MongoDB
* Using external APIs
* Authentication and request validation
* Git branching and GitHub workflows
* Building and running Docker containers
* Debugging containers using logs
* Deploying applications with Kubernetes
* Working with Jenkins CI/CD concepts
* Understanding AWS networking and infrastructure
* Using Terraform for Infrastructure as Code
* Troubleshooting application, container, networking, and deployment issues

---

## 🔍 Troubleshooting Approach

A major part of this project was learning how to troubleshoot applications systematically.

Typical flow:

```text
Application unavailable
        ↓
Check process/container
        ↓
Check application logs
        ↓
Check port mapping
        ↓
Check environment variables
        ↓
Check database connection
        ↓
Check networking
        ↓
Check infrastructure/security rules
        ↓
Fix
        ↓
Verify application again
```

Example Docker checks:

```bash
docker ps
docker ps -a
docker logs <container-name>
```

Example Linux checks:

```bash
top
free -h
df -h
```

Example Kubernetes checks:

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

---

## 📈 Project Purpose

MovieList started as a backend application and was later expanded into a practical environment for learning how an application moves from:

```text
Code
 ↓
Git
 ↓
Docker
 ↓
CI/CD
 ↓
Cloud Infrastructure
 ↓
Deployment
 ↓
Monitoring
```

The goal is to understand not only how to **build a backend application**, but also how to **package, deploy, operate, monitor, and troubleshoot it**.

---

## 👨‍💻 Author

**Sheikh Suhail Raza**

Backend & DevOps Engineer

Technologies:

`Node.js` `Express.js` `MongoDB` `REST APIs` `AWS` `Docker` `Kubernetes` `Jenkins` `Terraform` `Linux`
