# Notes App Backend

A robust and secure backend for a Notes application built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**
  - Secure user registration and login
  - JWT-based authentication
  - Password hashing using bcrypt

- **Notes Management**
  - Create, read, update, and delete notes
  - Protected routes with authentication middleware
  - User-specific note storage

## Tech Stack

- **Runtime Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcrypt for password hashing, CORS enabled
- **Development**: Nodemon for hot reloading

## Project Structure

```
backend/
├── controllers/     # Business logic handlers
├── models/         # Database schemas
├── routes/         # API route definitions
├── middleware/     # Custom middleware (auth, etc.)
├── configureDB/    # Database configuration
└── server.js       # Application entry point
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Notes
- `GET /api/notes` - Get all notes for authenticated user
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- CORS enabled for cross-origin requests
- Input validation using validator
