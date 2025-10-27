# 🏛️Myths & Legends
A Node.js + Express.js + MongoDB web application for managing ancient myths and legends — built with clean three-layer architecture, authentication, and full CRUD functionality.
It allows users to explore, share, and like mythical stories from around the world.

## ⚙️ Project Setup
- install mongo db
- install node js
```bash
git clone https://github.com/username/friendly-world.git
cd friendly-world
npm install
npm start
```
| Layer                 | Stack                                         |
| --------------------- | --------------------------------------------- |
| **Backend Framework** | Express.js                                    |
| **Templating Engine** | Handlebars / EJS / Pug *(developer’s choice)* |
| **Database**          | MongoDB with Mongoose                         |
| **Auth & Security**   | bcrypt for password hashing                   |
| **Architecture**      | Three-layer (Controller → Service → Model)    |
| **Frontend**          | HTML, CSS, JavaScript *(provided resources)*  |
| **Operations**        | Full CRUD + Like System + REST API (Report)   |

## ✨ Features
- **Home page (shows last 3 added myths and legends)**
- 🔐 **Auth System - register, login, logout with hashed passwords**
- ⚠️ **Validation & Error Handling — form validation and clear error messages**
- 📋 **Dashboard — lists all myths with image, name, origin, and role**
- 📝 **Add Myth — create a new myth or legend**
- ✏️ **Edit & Delete — available for myth owners only**
- ❤️ **Like System — users can like myths they don’t own**
- 🔍 **Details Page — full myth info with conditional buttons (Edit/Delete/Like)**
- 🧾 **Report Page — dynamically loads the latest 3 myths via REST API**
