# Job Portal Project - Complete Learning Summary

## Project Overview

A full-stack Job Portal application built using:

* React
* Spring Boot
* Spring Security
* JWT Authentication
* MySQL
* Docker
* Render
* Vercel
* Aiven

The project allows users to browse jobs while administrators can manage job postings through role-based authorization.

---

# Phase 1: Backend Fundamentals

## Layered Architecture

Learned separation of concerns:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

### Controller Layer

Responsibilities:

* Handle HTTP requests
* Validate incoming data
* Return responses

Examples:

```java
@GetMapping
@PostMapping
@PutMapping
@DeleteMapping
```

### Service Layer

Responsibilities:

* Business logic
* Data processing
* Security checks

Examples:

```java
createJob()
updateJob()
deleteJob()
searchJobs()
```

### Repository Layer

Responsibilities:

* Database communication

Used:

```java
JpaRepository
```

Custom queries:

```java
findByLocation()
findByCompany()
findBySkill()
```

---

# Phase 2: Database Design

## Entity Creation

Created:

### Job Entity

Fields:

```java
id
title
company
location
salary
skills
description
imgUrl
```

### User Entity

Fields:

```java
id
username
password
role
```

---

## JPA Concepts Learned

Annotations:

```java
@Entity
@Id
@GeneratedValue
@Column
```

Benefits:

* Object Relational Mapping
* Automatic table generation

---

## Hibernate

Configuration:

```properties
spring.jpa.hibernate.ddl-auto=update
```

Learned:

* Table creation
* Table updates
* Entity mapping

---

# Phase 3: REST API Development

## CRUD Operations

### Create

```http
POST /jobs
```

### Read

```http
GET /jobs
GET /jobs/{id}
```

### Update

```http
PUT /jobs/{id}
```

### Delete

```http
DELETE /jobs/{id}
```

---

## REST Principles Learned

Resources:

```text
/jobs
/users
/auth
```

HTTP Methods:

```text
GET
POST
PUT
DELETE
```

Status Codes:

```text
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
```

---

# Phase 4: Advanced Backend Features

## Search

Implemented:

```http
/jobs/search?keyword=
```

Concepts:

* Query Parameters
* Repository Search Methods

---

## Filtering

Implemented:

```http
/jobs/filter
```

Filters:

* Location
* Skill
* Company
* Salary
* Sorting

Learned:

* Optional Request Parameters
* Dynamic Filtering

---

## Pagination

Implemented:

```http
/jobs/page?page=0&size=5
```

Learned:

```java
Page
Pageable
PageRequest
```

Benefits:

* Better performance
* Smaller responses

---

## Sorting

Implemented:

```http
sortBy=salary
sortBy=company
```

Learned:

```java
Sort.by()
```

---

# Phase 5: Spring Security

## Authentication vs Authorization

### Authentication

Question:

```text
Who are you?
```

Example:

```text
Username + Password
```

### Authorization

Question:

```text
What are you allowed to do?
```

Example:

```text
Admin can add jobs
User cannot add jobs
```

---

## Password Encryption

Used:

```java
BCryptPasswordEncoder
```

Never stored:

```text
Plain text passwords
```

Learned:

```java
encoder.encode(password)
```

---

# Phase 6: JWT Authentication

## Why JWT?

Without JWT:

```text
Every request requires login
```

With JWT:

```text
Login once
Use token afterwards
```

---

## JWT Flow

### Login

```text
User submits credentials
```

↓

```text
Credentials validated
```

↓

```text
JWT generated
```

↓

```text
Token returned
```

---

## Token Storage

Frontend:

```javascript
localStorage
```

Stored:

```text
token
role
```

---

## JWT Filter

Created:

```java
JwtFilter
```

Responsibilities:

* Read Authorization header
* Validate token
* Set SecurityContext

---

# Phase 7: Role-Based Access Control

## Roles

```text
ADMIN
USER
```

---

## Security Rules

Admin Only:

```http
POST /jobs
PUT /jobs/**
DELETE /jobs/**
```

Public:

```http
GET /jobs
GET /jobs/**
```

Authentication:

```http
/auth/login
/auth/register
```

---

## Spring Security Concepts

Learned:

```java
hasRole("ADMIN")
permitAll()
authenticated()
```

---

# Phase 8: React Fundamentals

## Component Architecture

Created:

```text
Navbar
JobCard
FilterBar
Login
Register
JobDetails
```

Learned:

* Reusable Components
* Props
* State Management

---

## State Management

Used:

```javascript
useState
```

For:

* Search
* Filters
* Pagination
* Login State

---

## Side Effects

Used:

```javascript
useEffect
```

For:

* API Calls
* Initial Data Loading

---

# Phase 9: Routing

Used:

```javascript
react-router-dom
```

Learned:

```javascript
<Route>
<Link>
useNavigate()
useParams()
```

Routes:

```text
/
 /login
 /register
 /addJob
 /editJob/:id
 /job/:id
```

---

# Phase 10: Axios

## API Layer

Created:

```javascript
service.js
```

Responsibilities:

* Centralized API communication

---

## Interceptors

Learned:

```javascript
axios.interceptors.request.use()
```

Purpose:

Automatically attach:

```http
Authorization: Bearer token
```

---

# Phase 11: Frontend Security

## UI Protection

Hide buttons:

```text
Add Job
Edit Job
Delete Job
```

from:

```text
USER
```

Show only for:

```text
ADMIN
```

Important Lesson:

UI protection alone is not security.

Backend security is mandatory.

---

# Phase 12: CORS

Problem:

Frontend:

```text
localhost:5173
```

Backend:

```text
localhost:8080
```

Different origins.

---

Solution:

```java
CorsConfiguration
```

Allowed:

```java
setAllowedOrigins()
```

---

## Production CORS

Allowed:

```text
localhost
vercel domain
```

Learned:

CORS must be configured on backend.

---

# Phase 13: Docker

## Why Docker?

Problem:

```text
Works on my machine
```

Solution:

```text
Containerized application
```

---

## Dockerfile

Learned:

```dockerfile
FROM
WORKDIR
COPY
RUN
CMD
```

---

## Build Process

```text
Source Code
↓
Docker Image
↓
Docker Container
```

---

# Phase 14: Database Migration

## Local Database

Used:

```text
MySQL Local
```

---

## Cloud Database

Migrated to:

```text
Aiven MySQL
```

Learned:

* Export Database
* Import Database
* Cloud Connections

Tools:

```text
mysqldump
mysql
```

---

# Phase 15: Backend Deployment

Platform:

```text
Render
```

Learned:

* Docker Deployment
* Environment Variables
* Build Logs
* Runtime Logs

Environment Variables:

```text
DB_URL
DB_USERNAME
DB_PASSWORD
PORT
```

---

# Phase 16: Frontend Deployment

Platform:

```text
Vercel
```

Learned:

* Root Directory Configuration
* Build Commands
* Output Directories
* Deployment Logs

---

# Phase 17: Git & GitHub

Learned:

```bash
git add
git commit
git push
git pull
```

---

## Tags

Created:

```bash
git tag -a v2.0
git push origin v2.0
```

Purpose:

* Milestones
* Releases

---

# Phase 18: Debugging Lessons

## React

Learned:

* Empty state issues
* Async loading
* Conditional rendering

Example:

```javascript
locations = []
```

before API response arrives.

---

## Spring Security

Learned:

* 401 Unauthorized
* 403 Forbidden
* JWT validation issues

---

## Deployment

Learned:

* Dockerfile naming issues
* Java version issues
* Environment variable issues
* CORS issues

---

# Most Important Takeaways

## Backend

* Layered Architecture
* REST APIs
* JPA/Hibernate
* Spring Security
* JWT
* RBAC

## Frontend

* React Components
* Routing
* State Management
* Axios
* Protected UI

## DevOps

* Docker
* Render
* Vercel
* Aiven

## Software Engineering

* Debugging
* Deployment
* Git Workflow
* Production Configuration
* Cloud Services

---

# Project Status

Version:

```text
v2.0
```

Status:

```text
Production Deployed
```

Architecture:

```text
Frontend (Vercel)
        ↓
Backend (Render + Docker)
        ↓
Database (Aiven MySQL)
```

Next Possible Version:

```text
v3.0
Resume Upload
Job Applications
Application Tracking
```
