# Job Portal

A full-stack Job Portal application built using React, Spring Boot, Spring Security, JWT Authentication, and MySQL.

The application allows users to browse job listings, search and filter jobs, and view detailed job information. Administrators can securely manage job postings through role-based access control.

## Live Demo

Frontend: https://job-portal-coral-ten.vercel.app

Backend: https://job-portal-backend-2913.onrender.com

---

# Screenshots

## Home Page

![Home Page](screenshot/home.png)

---

## Login Page

![Login Page](screenshot/login.png)

---

## Registration Page

![Registration Page](screenshot/register.png)

---

## Admin Dashboard

![Admin Dashboard](screenshot/home_after_admin_login.png)

---

## User Dashboard

![User Dashboard](screenshot/home_after_user_login.png)

---

## Job Detail Page

![Job Detail Page](screenshot/detailpage.png)

---

# Features

## Job Management

* View Job Listings
* View Job Details
* Search Jobs by Keyword
* Filter Jobs by:

  * Location
  * Skill
  * Company
  * Salary
* Pagination
* Sorting
* Responsive User Interface

## Authentication

* User Registration
* User Login
* JWT Authentication
* Secure Logout
* Password Encryption using BCrypt

## Authorization

### Guest

* View Jobs
* Search Jobs
* Filter Jobs
* View Job Details

### User

* View Jobs
* Search Jobs
* Filter Jobs
* View Job Details

### Admin

* Add Jobs
* Edit Jobs
* Delete Jobs
* Full Job Management Access

## Security

* Spring Security
* JWT Token Validation
* Role-Based Access Control
* Route Protection
* Axios Request Interceptor
* Global CORS Configuration

---

# Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS
* React Toastify

## Backend

* Spring Boot
* Spring Security
* Spring Data JPA
* JWT (JSON Web Token)
* Maven

## Database

* MySQL
* Aiven Cloud MySQL

## Deployment

### Frontend

* Vercel

### Backend

* Render
* Docker

### Database

* Aiven

---

# Project Structure

```text
JOB_Portal
│
├── Backend
│   └── Job_portal
│       ├── src
│       ├── pom.xml
│       ├── Dockerfile
│       └── mvnw
│
├── Frontend
│   └── job-portal
│       ├── src
│       ├── public
│       ├── package.json
│       └── vite.config.js
│
├── screenshots
│   ├── home.png
│   ├── login.png
│   ├── register.png
│   ├── home_after_admin_login.png
│   ├── home_after_user_login.png
│   └── detailpage.png
│
└── README.md
```

---

# Role-Based Access

| Feature          | Guest | User | Admin |
| ---------------- | ----- | ---- | ----- |
| View Jobs        | Yes   | Yes  | Yes   |
| Search Jobs      | Yes   | Yes  | Yes   |
| Filter Jobs      | Yes   | Yes  | Yes   |
| View Job Details | Yes   | Yes  | Yes   |
| Add Job          | No    | No   | Yes   |
| Edit Job         | No    | No   | Yes   |
| Delete Job       | No    | No   | Yes   |

---

# Installation

## Clone Repository

```bash
git clone https://github.com/MyAtul/Job-Portal.git
cd Job-Portal
```

---

## Backend Setup

Navigate to the backend directory:

```bash
cd Backend/Job_portal
```

Configure the database connection in:

```properties
application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/jobportal
spring.datasource.username=root
spring.datasource.password=your_password
```

Run the application:

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

---

## Frontend Setup

Navigate to the frontend directory:

```bash
cd Frontend/job-portal
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Authentication Flow

1. User registers an account.
2. User logs in using credentials.
3. Backend validates credentials.
4. JWT token is generated.
5. Token is stored in Local Storage.
6. Axios Interceptor automatically attaches the token to requests.
7. Spring Security validates the token.
8. Role-based authorization is applied.

---

# API Endpoints

## Authentication

```http
POST /auth/register
POST /auth/login
```

## Jobs

```http
GET    /jobs
GET    /jobs/{id}
POST   /jobs
PUT    /jobs/{id}
DELETE /jobs/{id}
```

## Search & Filters

```http
GET /jobs/search
GET /jobs/filter
GET /jobs/location
GET /jobs/company
GET /jobs/skill
GET /jobs/salary
```

## Pagination & Sorting

```http
GET /jobs/page
GET /jobs/count
```

---

# Deployment Architecture

```text
Frontend (Vercel)
        │
        ▼
Backend (Render + Docker)
        │
        ▼
Database (Aiven MySQL)
```

---

# Future Enhancements

* Resume Upload
* Apply for Jobs
* Application Tracking System
* User Profiles
* Saved Jobs
* Admin Dashboard Analytics
* Email Notifications
* Job Recommendations
* Resume Parsing
* Cloud Storage Integration

---

# Author

Atul Yadav

Built to practice and demonstrate:

* React
* Spring Boot
* Spring Security
* JWT Authentication
* MySQL
* REST APIs
* Docker
* Cloud Deployment
* Full-Stack Development
* Role-Based Access Control
