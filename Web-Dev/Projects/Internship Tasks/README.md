
# 📌 Internship Task Application
### **Full Stack MERN Authentication + Task Manager**
### **Author:** *Shrenik Dubal*

---

## 🚀 Project Overview
A fully functional Authentication + Task Manager system built with:
- Next.js 14
- Express.js
- MongoDB
- JWT Authentication (HttpOnly Cookies)
- Role-based Authorization (User/Admin)
- REST API with `/api/v1` versioning

---

## ✨ Features

### 🔐 Authentication
- Register user
- Login user
- HttpOnly JWT cookies
- Logout functionality

### 🔑 Authorization
- User & Admin roles
- Protected backend routes
- Protected frontend pages

### 📋 Tasks Module
- Add tasks  
- View tasks  
- Delete tasks  
- User-specific task storage  

### 🎨 UI/UX Enhancements
- TailwindCSS modern UI  
- Gradient backgrounds  
- Beautiful forms & dashboards  
- Admin panel  
- Mobile responsiveness  

---

# 📘 API Documentation (REST API – `/api/v1`)

### **Base URL**
```
http://localhost:5000/api/v1
```

---

## 🔐 Authentication APIs

### **1. Register User**
**POST** `/auth/register`  

#### Request Body
```json
{
  "username": "john",
  "password": "mypassword"
}
```

---

### **2. Login User**
**POST** `/auth/login`

Sets JWT inside **HttpOnly Cookie**.

#### Request Body
```json
{
  "username": "john",
  "password": "mypassword"
}
```

---

### **3. Logout User**
**GET** `/logout`  
Clears the JWT cookie.

---

## 🧑‍💻 Task APIs (Protected)

### **4. Get All Tasks**
**GET** `/tasks`

---

### **5. Create Task**
**POST** `/tasks`  
```json
{
  "title": "New Task",
  "description": "Task description"
}
```

---

### **6. Delete Task**
**DELETE** `/tasks/:id`

---

## 👑 Admin APIs (Role-Based)

### **7. Admin Access Check**
**GET** `/admin`

Response:
```json
{
  "message": "Welcome Admin. You have full access."
}
```

---

# 📐 Scalability Notes

This application is designed with horizontal and vertical scaling in mind:

### **1. Horizontal Scaling**
- Use load balancers such as NGINX or AWS ELB  
- Stateless JWT authentication ensures easy scaling  

### **2. Database Scaling**
- MongoDB Atlas offers sharding & replication  
- Connection pooling improves throughput  

### **3. Performance Enhancements**
- Redis caching for popular operations  
- Rate limiting using `express-rate-limit`  
- CDN for frontend static files  

### **4. Code-base Scalability**
- Modular controllers & routes  
- Versioned APIs (`/api/v1`)  
- Clear separation of backend & frontend  

### **5. Deployment Scalability**
- Docker containerization  
- CI/CD pipelines  
- Environment-based configuration  

---

# 📂 Project Structure
```
Internship Tasks/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── lib/
│   └── package.json
│
└── README.md
```

---

# ⚙️ Backend Setup

### Install Dependencies
```bash
cd backend
npm install
```

### Create `.env`
```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```

### Start Server
```bash
npm start
```

Backend runs on:  
👉 **http://localhost:5000**

---

# 🖥 Frontend Setup

### Install Dependencies
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:  
👉 **http://localhost:3000**

---

# 🎯 Conclusion
This full‑stack application meets all internship task requirements with:
- Clean architecture  
- Secure authentication  
- Role‑based access  
- Tasks CRUD  
- Modern UI  
- Scalable backend  

Perfect for submission.

