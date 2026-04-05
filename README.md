# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for a finance dashboard that allows users to manage financial records based on their roles. It demonstrates API design, role-based access control, data processing, and dashboard analytics.

The system supports multiple user roles and provides secure, structured APIs for managing financial data and generating insights.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User registration and login using JWT
* Role-based access control (RBAC)
* Protected routes using middleware

### 👤 User Management (Admin Only)

* View all users
* Update user roles (ADMIN, ANALYST, VIEWER)
* Activate/Deactivate users

### 💰 Financial Records Management

* Create financial records (income/expense)
* View records with filtering
* Update records
* Delete records
* Filter by:

  * Type (INCOME / EXPENSE)
  * Category
  * Date range

### 📊 Dashboard Analytics

* Total income
* Total expenses
* Net balance
* Category-wise breakdown
* Recent transactions

### 🔒 Access Control

* ADMIN → Full access
* ANALYST → Read access
* VIEWER → Limited read access

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

---

## 📁 Project Structure

```
src/
│
├── config/        # Database configuration
├── controllers/   # Business logic
├── models/        # Mongoose schemas
├── routes/        # API routes
├── middlewares/   # Auth & role middleware
├── utils/         # Utility functions (JWT)
├── services/      # (Optional) Business logic layer
├── app.js         # Entry point
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/Ankitbhatkar/finance-backend.git
cd finance-backend
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 🔑 Authentication

Use JWT Token in headers:

```
Authorization: Bearer <your_token>
```

---

## 📡 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

---

### 👤 Users (Admin Only)

* `GET /api/users`
* `PATCH /api/users/:id`

---

### 💰 Records

* `POST /api/records` (Admin only)
* `GET /api/records`
* `PUT /api/records/:id` (Admin only)
* `DELETE /api/records/:id` (Admin only)

#### Filters:

```
/api/records?type=INCOME
/api/records?category=Salary
/api/records?startDate=2026-01-01&endDate=2026-12-31
```

---

### 📊 Dashboard

* `GET /api/dashboard/summary`

---

## 🧪 Sample Users

```
ADMIN:
email: admin@test.com
password: 123456

ANALYST:
email: analyst@test.com
password: 123456

VIEWER:
email: viewer@test.com
password: 123456
```

---

## 🧠 Assumptions

* Each record belongs to a user (`createdBy`)
* Non-admin users can only view their own records
* Admin can view all records
* JWT is used for authentication

---

## ⚠️ Error Handling

* Proper status codes used (400, 401, 403, 404, 500)
* Protected routes require valid token
* Unauthorized actions return appropriate errors

---

## ⭐ Optional Enhancements

* Pagination support
* Input validation
* Swagger API documentation
* Deployment (Render/Railway)

---

## 🎯 Conclusion

This project demonstrates a structured backend system with clean API design, role-based access control, and data aggregation for dashboard analytics. It reflects real-world backend development practices with a focus on maintainability and scalability.

---

## 📬 Submission

* GitHub Repository: https://github.com/Ankitbhatkar/finance-backend.git


---
