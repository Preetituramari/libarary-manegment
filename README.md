# libarary-manegment
<img width="1327" height="602" alt="1" src="https://github.com/user-attachments/assets/a3488385-e06c-49e7-af1e-24cbcfecdf7d" />
<img width="1365" height="596" alt="2" src="https://github.com/user-attachments/assets/ecb8d609-49d2-40c3-b943-b324143f94d4" />
<img width="1365" height="601" alt="3" src="https://github.com/user-attachments/assets/59d05030-77e9-4ff9-8a6e-35e0761874fe" />
<img width="1366" height="594" alt="4" src="https://github.com/user-attachments/assets/88a03397-708f-4e46-b139-2cc994b5b2e4" />
<img width="1263" height="598" alt="5" src="https://github.com/user-attachments/assets/06e1d0b8-0d8d-4514-9c7a-e644d6880786" />
# 📚 Library Management System

<div align="center">

![Library Banner](https://img.shields.io/badge/Project-Library%20Management%20System-blue?style=for-the-badge)

![HTML](https://img.shields.io/badge/HTML5-Frontend-orange?style=flat-square)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow?style=flat-square)
![MySQL](https://img.shields.io/badge/MySQL-Database-green?style=flat-square)

</div>

---

# 🚀 Overview

The **Library Management System** is a modern web-based application designed to manage library operations efficiently.  
It provides separate portals for:

- 👤 User
- 👨‍💼 Employee
- 🛡️ Admin

The project includes responsive UI, book management, user handling, and database integration.

---

# ✨ Features

## 👤 User Portal
- View all books
- Search books
- Borrow books
- Return books
- View issued books

## 👨‍💼 Employee Portal
- Add books
- Update book details
- Delete books
- Manage issue records

## 🛡️ Admin Portal
- Manage employees
- Manage users
- View reports
- System monitoring

---

# 🛠️ Technologies Used

| Frontend | Backend | Database |
|----------|----------|-----------|
| HTML5 | PHP / Node.js | MySQL |
| CSS3 | Express.js | Oracle SQL |
| JavaScript | REST API | Firebase |

---

# 📂 Project Structure

```bash
Library-Management-System/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
├── pages/
│   ├── user.html
│   ├── employee.html
│   └── admin.html
│
├── database/
│   └── library.sql
│
└── README.md
```

---

# 💻 Home Page Features

✅ Modern Formula 1 Inspired Design  
✅ Responsive Layout  
✅ Animated Navigation  
✅ Portal-Based Access  
✅ Shared Header & Footer  

---

# 🗄️ Database Schema

## STUDENT Table

```sql
CREATE TABLE STUDENT (
    regno VARCHAR(20) PRIMARY KEY,
    name VARCHAR(50),
    major VARCHAR(50),
    bdate DATE
);
```

## BOOK Table

```sql
CREATE TABLE BOOK (
    book_id INT PRIMARY KEY,
    title VARCHAR(100),
    author VARCHAR(100),
    quantity INT
);
```

## PUBLISHER Table

```sql
CREATE TABLE PUBLISHER (
    name VARCHAR(20) PRIMARY KEY,
    phone INT,
    address VARCHAR(50)
);
```

---

# ⚙️ Installation

```bash
# Clone Repository
git clone https://github.com/your-username/library-management-system.git

# Navigate to Project
cd library-management-system

# Run Project
Open index.html using Live Server
```

---

# 📸 UI Preview

| Page | Description |
|------|-------------|
| Home | Landing Page |
| User Portal | Student Dashboard |
| Employee Portal | Book Management |
| Admin Portal | System Control |

---

# 🔥 Future Enhancements

- 📱 Mobile Application
- 🤖 AI Chatbot Support
- 📊 Analytics Dashboard
- 🌙 Dark Mode
- 🔔 Notification System

---

# 👨‍💻 Developed By

### Shivu Royal Reddy

---

# 📜 License

This project is licensed under the **MIT License**.

---

<div align="center">

⭐ Star this repository if you like this project ⭐

</div>
