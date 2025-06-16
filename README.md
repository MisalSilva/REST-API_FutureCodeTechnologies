# 🚀 REST API - Backend Developer Assignment

This is a simple RESTful API built with **Node.js**, **Express**, **MySQL**, and **Sequelize** to manage user registration/login and perform CRUD operations on products.

## 📌 Features

- ✅ User Registration
- ✅ User Login
- ✅ CRUD operations for Product:
  - Create a Product
  - Read all Products / single Product
  - Update a Product
  - Delete a Product
- ✅ Tested with Postman

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL** (via MySQL Workbench)
- **Sequelize ORM**
- **Postman** (for testing)

---

## 🧪 API Endpoints (Postman)

### 🔐 User Routes
| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |



### 📦 Product Routes

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| POST   | `/api/products`     | Create a new product |
| GET    | `/api/products`     | Get all products     |
| GET    | `/api/products/:id` | Get product by ID    |
| PUT    | `/api/products/:id` | Update product by ID |
| DELETE | `/api/products/:id` | Delete product by ID |

---


## 🧰 Tools Used

- **MySQL Workbench (DB management)**
- **Sequelize (ORM for MySQL)**
- **Postman (API testing)**
