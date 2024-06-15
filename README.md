# Sports Facility Booking System

[![Live Demo](https://img.shields.io/badge/Live-Demo-green)](https://sports-facility-booking-backend.vercel.app)
[![Project Overview Video](https://img.shields.io/badge/Project-Overview-orange)](YOUR_PROJECT_OVERVIEW_VIDEO_LINK)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [User Roles](#user-roles)
- [Authentication & Authorization](#authentication--authorization)
- [Linting & Formatting](#linting--formatting)
- [Contributing](#contributing)

## Introduction

The Sports Facility Booking System is a web application that allows users to book sports facilities and manage their bookings. The project supports two user roles: user and admin. It is built with Express, Mongoose, TypeScript, Node.js and Zod validation, ensuring robust backend functionality. Authentication and authorization are handled using JWT. The project also uses ESLint and Prettier for code quality and formatting.

## Features

- **User Registration and Authentication**
- **Role-Based Access Control (User and Admin)**
- **CRUD Operations for Bookings**
- **JWT-Based Authentication**
- **Facility Availability Check**
- **User Profile Management**

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Language:** TypeScript
- **Data Validation:** Zod
- **Authentication:** JWT
- **Linting & Formatting:** ESLint, Prettier

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **MongoDB** (local or Atlas)
- **npm** (v6 or higher) or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/justJubair/sports-facility-backend.git
   cd sports-facility-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   NODE_ENV=development
   PORT=5000
   BCRYPT_SALT_ROUND= number
   DATABASE_URL="mongodb+srv://username:password@cluster0.letvseo.mongodb.net/sports-facility-platform?retryWrites=true&w=majority&appName=Cluster0"
   JWT_ACCESS_SECRET=Add a jwt secret
   ```

### Running the Application

1. **Start the development server:**

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

2. **Visit the application:**

   Open your browser and go to `http://localhost:5000`.

## API Endpoints

Here's a brief overview of the main API endpoints:

- **Auth:**

  - `POST /api/auth/signup` - Register a new user
  - `POST /api/auth/login` - Login a user

- **Facility:**

  - `POST /api/facility` - Create a facility (admin only)
  - `PUT /api/facility/:id` - Update a facility (admin only)
  - `GET /api/facility` - Get all facilities
  - `DELETE /api/facility/:id` - Soft Delete a facility by ID (admin only)

- **Bookings:**
  - `GET /api/check-availability` - Check the availability of time slots for booking on a specific date.
  - `POST /api/bookings` - Create a Booking (User Only)
  - `GET /api/bookings` - Get all Bookings (admin Only)
  - `GET /api/bookings/user` - Get all user specific Bookings (user only)
  - `DELETE /api/bookings/:id` - Cancel a booking by ID (user only)

## User Roles

- **User:**

  - Can create and manage their own bookings
  - Can view available facilities

- **Admin:**
  - Can manage all users and bookings
  - Can add or remove facilities
  - Has access to all user functionalities

## Authentication & Authorization

The application uses JWT for authentication and authorization. Tokens are required for accessing protected routes. Roles are checked to ensure proper access control.

## Linting & Formatting

The project uses ESLint and Prettier to maintain code quality and consistency.

- **Linting:**

  ```bash
  npm run lint
  # or
  yarn lint
  ```

- **Formatting:**

  ```bash
  npm run prettier:fix
  # or
  yarn prettier:fix
  ```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to make.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request
