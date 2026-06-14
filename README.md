# Job Portal

A full-stack Job Portal application built with React, Spring Boot, and MySQL. The application allows administrators to manage job listings through a clean and responsive interface.

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* React Toastify

### Backend

* Spring Boot
* Spring Data JPA
* Hibernate

### Database

* MySQL

---

## Features

### Job Management

* Add Job
* Edit Job
* Delete Job
* View Job Details
* View All Jobs

### Search & Filtering

* Search Jobs by Title
* Debounced Search
* Search Suggestions
* Filter by Location
* Filter by Skills
* Filter by Company
* Filter by Salary Range
* Dynamic Filter Options

### Sorting & Pagination

* Pagination
* Sort by Title
* Sort by Company
* Sort by Location
* Sort by Salary

### User Experience

* Responsive UI
* Loading Spinner
* Empty State Component
* Toast Notifications
* Company Logo Support

### Backend Features

* RESTful APIs
* Validation using Jakarta Validation
* Global Exception Handling
* Custom Exceptions
* Pagination Support
* Dynamic Filtering
* Dynamic Sorting

---

## API Endpoints

### Jobs

* `POST /jobs` - Add Job
* `GET /jobs` - Get All Jobs
* `GET /jobs/{id}` - Get Job By ID
* `PUT /jobs/{id}` - Update Job
* `DELETE /jobs/{id}` - Delete Job

### Search

* `GET /jobs/search?keyword=java`

### Pagination

* `GET /jobs/page?page=0&size=5`

### Filters

* `GET /jobs/filter`

Example:

```http
/jobs/filter?location=Mumbai&skill=Java&salary=10&sortBy=title
```

### Dynamic Filter Data

* `GET /jobs/locations`
* `GET /jobs/companies`
* `GET /jobs/skills`

### Statistics

* `GET /jobs/count`

---

## Project Structure

```text
JOB_PORTAL
│
├── Backend
│
└── Frontend
```

---

## Future Improvements

* JWT Authentication
* Role Based Access Control
* Applicant Portal
* Resume Upload
* Apply Job Feature
* Dashboard Analytics
* Favorites / Saved Jobs

---

## Author

Atul Yadav
