# 🛒 E-Commerce Microservices

A production-ready E-Commerce backend built with **NestJS Microservices** following enterprise architecture and clean architecture principles.

---

# 🎯 Project Goals

- Build a scalable Microservices Architecture from scratch.
- Learn enterprise backend development.
- Follow Clean Architecture principles.
- Apply Git Flow and Conventional Commits.
- Use asynchronous communication with RabbitMQ.
- Build production-ready services.

---

# 🛠 Tech Stack

- NestJS
- TypeScript
- TypeORM
- MySQL
- RabbitMQ
- Docker & Docker Compose
- JWT Authentication
- Passport
- Joi Validation
- GitHub Actions (Coming Soon)
- Swagger (Coming Soon)

---

# 📂 Project Structure

```text
apps/
├── auth/
└── ecommerce-microservices/

libs/
├── common/
├── config/
├── database/
└── rabbitmq/
```

---

# 🏗 Architecture

```text
                    Client
                       │
                       ▼
                 API Gateway
                       │
            Request / Response
                 (RabbitMQ)
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Auth Service   User Service   Product Service
        │              │              │
      MySQL          MySQL         MySQL
```

Each Microservice owns its own database and communicates with other services through RabbitMQ.

---

# 🚀 Development Workflow

We follow:

- Git Flow
- Feature Branches
- Conventional Commits
- Code Reviews
- Small Incremental Commits

---

# 📅 Roadmap

## ✅ Sprint 1 — Project Foundation

- [x] Initialize Git Repository
- [x] Configure GitHub Repository
- [x] Setup SSH Authentication
- [x] Create NestJS Monorepo
- [x] Create Auth Service
- [x] Configure Git Flow

---

## ✅ Sprint 2 — Auth Foundation

- [x] Config Module
- [x] Environment Variables
- [x] Environment Validation
- [x] Global Validation Pipe
- [x] Health Check Endpoint

---

## ✅ Sprint 3 — Database

- [x] Configure TypeORM
- [x] Shared Database Library
- [x] MySQL Connection
- [x] User Entity
- [ ] Database Migrations

---

## ✅ Sprint 4 — Authentication

- [x] Register
- [x] Login
- [x] Password Hashing
- [x] JWT Authentication
- [x] Refresh Token Rotation

---

## ✅ Sprint 5 — RabbitMQ Foundation

- [x] Shared RabbitMQ Library
- [x] Dynamic RabbitMQ Module
- [x] Multiple Client Support
- [ ] Message Consumers
- [ ] Message Patterns

---

## 🚧 Sprint 6 — API Gateway

- [x] Gateway Application
- [x] Gateway Auth Module
- [x] Gateway Foundation
- [ ] Gateway → Auth Communication
- [ ] Register Endpoint
- [ ] Login Endpoint

---

# 🌳 Git Strategy

```text
main
│
develop
│
├── feature/auth-foundation
├── feature/database
├── feature/rabbitmq
├── feature/api-gateway
├── feature/register
└── feature/login
```

---

# 📝 Commit Convention

```bash
feat(auth): implement refresh token rotation
feat(rabbitmq): support multiple RabbitMQ clients
feat(gateway): initialize API Gateway
fix(auth): validate duplicate email
refactor(database): extract shared module
docs: update README
chore: configure eslint
```

---

# ✅ Current Features

- NestJS Monorepo
- API Gateway
- Authentication Service
- Shared Config Library
- Shared Database Library
- Shared RabbitMQ Library
- JWT Authentication
- Refresh Token Rotation
- Docker Development Environment

---

# 🎯 Current Progress

## Completed

- Monorepo Setup
- Authentication Service
- Shared Libraries
- RabbitMQ Infrastructure
- API Gateway Foundation

## Currently Working On

- API Gateway ↔ Auth Service communication using RabbitMQ

## Next Milestone

- Hybrid Auth Service
- RabbitMQ Message Handlers
- Gateway Register Flow
- Gateway Login Flow

---

# 📌 Project Status

🟢 **Project is under active development following enterprise architecture and microservices best practices.**
