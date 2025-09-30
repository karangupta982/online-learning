# Online Learning Platform

This project is a fully responsive web application for students and instructors, built using the MERN (MongoDB, Express, React, Node.js) stack with Tailwind CSS. It allows instructors to create and manage courses, and students to enroll in and learn from these courses. The platform also features a resource hub for students to explore different engineering career paths.

## Features

### For Instructors:
- **Instructor Dashboard**: Manage all courses and enrolled students.
- **Course Creation**: Create courses with detailed information (title, description, price, category, tags, requirements, whatYouWillLearn etc.).
- **Course Management**: Publish or save courses as drafts. Instructors decide the course status.
- **Payment Integration**: Set course prices, and students can purchase courses.
- **Track Students**: View students enrolled in courses and monitor progress.

### For Students:
- **Course Enrollment**: Browse courses and enroll after purchasing.
- **Learning**: Access course content, lectures, and other materials.
- **Reviews**: Submit reviews for courses after completion.
- **Career Resources**: Explore the Resources tab to find descriptions of various engineering fields, helping students choose their career paths.

### General Features:
- **Fully Responsive**: Works on all devices (desktop, tablet, and mobile).
- **Authentication**: Secure login/signup for both students and instructors.
- **Payment Gateway**: Integrated payment system for seamless transactions.
- **Resources Section**: Detailed career guides and links to valuable resources for  students.
  
## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Razorpay
- **Development**: MERN Stack (MongoDB, Express, React, Node.js)

## Installation

To get a local copy of this project up and running, follow these steps:

1. **Clone the repo:**
    ```bash
    git clone https://github.com/karangupta982/ApniCoaching
    ```
2. **Install dependencies:**
    Navigate to the project folder and run:
    ```bash
    npm install
    ```
3. **Environment variables:**
   Create a `.env` file in the root directory and add the following environment variables:
    - `MONGO_URI`: CONNECTION STRING
    - `JWT_SECRET`: SECRET KEY
    - `Razorpay_Secret_key`: KEY
    - `Razorpay_Id`: Id
    - `Cloudinary_folder_name`: FOLDER_NAME
    - `MAIL_HOST`: HOST_NAME
    - `MAIL_USER`: NAME
    - `MAIL_PASS`: PASS
    - `CLOUD_NAME`: NAME
    - `API_SECRET`: KEY
    - `API_KEY`: KEY


  
4. **Run the app:**
    Start the development server with:
    ```bash
    npm run dev
    ```

The app will be running on `http://localhost:3000`.

## File Structure

```bash
├── client                 # React frontend
├── server                 # Express backend
├── models                 # MongoDB schemas
├── routes                 # API routes
├── controllers            # Logic handling for API
├── public                 # Static assets
├── .env.example           # Example environment variables file
├── README.md              # Project documentation
└── data                   # Project data
