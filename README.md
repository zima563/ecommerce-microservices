# 🛒 E-Commerce Microservices

A production-ready E-Commerce backend built with **NestJS Microservices** following enterprise architecture and best practices.

## 🎯 Project Goals

- Learn and implement Microservices Architecture from scratch.
- Follow production-ready development practices.
- Use Git Flow and Conventional Commits.
- Build a scalable backend using NestJS.

---

## 🛠 Tech Stack

- NestJS
- TypeScript
- MySQL
- Prisma ORM
- RabbitMQ
- Redis
- Docker & Docker Compose
- JWT Authentication
- GitHub Actions
- Swagger

---

## 📂 Architecture

```text
                API Gateway
                     │
      ┌──────────────┼──────────────┐
      │              │              │
    Auth          User         Product
      │              │              │
      └────── RabbitMQ Events ──────┘
                     │
        Order ─ Payment ─ Notification
```

---

## 🚀 Development Workflow

We follow:

- Git Flow
- Feature Branches
- Conventional Commits
- Code Review before every merge

---

# Roadmap

## Sprint 1 — Project Foundation

- [x] Initialize Git Repository
- [x] Configure GitHub Repository
- [x] Setup SSH Authentication
- [x] Create NestJS Monorepo
- [x] Create Auth Service
- [x] Configure Git Flow

---

## Sprint 2 — Auth Foundation

- [x] Configure Config Module
- [x] Environment Variables
- [x] Health Check Endpoint
- [ ] Environment Validation
- [ ] Global Exception Filter
- [ ] Global Validation Pipe
- [ ] Logger

---

## Sprint 3 — Database

- [ ] Prisma
- [ ] MySQL
- [ ] Initial Migration
- [ ] User Model

---

## Sprint 4 — Authentication

- [ ] Register
- [ ] Login
- [ ] Password Hashing
- [ ] JWT
- [ ] Refresh Token

---

## Sprint 5 — Messaging

- [ ] RabbitMQ
- [ ] UserRegistered Event
- [ ] Event Consumers

---

## Git Strategy

```text
main
│
develop
│
feature/auth-foundation
feature/database
feature/register
feature/login
feature/rabbitmq
```

---

## Commit Convention

```bash
feat(auth): add health check endpoint
fix(auth): validate duplicate email
refactor(auth): extract auth module
docs: update README
chore: configure eslint
```

---

## Status

🟢 Project in Active Development
