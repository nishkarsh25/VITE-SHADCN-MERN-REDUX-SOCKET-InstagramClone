# VITE-SHADCN-MERN-REDUX-SOCKET-InstagramClone

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a modern web application designed to facilitate social interactions among users. It provides a platform where users can create profiles, connect with others, chat in real-time, and post updates. The application is built with a React frontend and a Node.js backend, offering a seamless and interactive user experience. It leverages several advanced technologies and tools to ensure a robust and scalable solution.


## Key Features

- **User Authentication**: Secure user registration and login system with JWT-based authentication.
- **Profile Management**: Users can create and edit their profiles, including updating their profile picture and bio.
- **Real-Time Chat**: Real-time messaging functionality using Socket.io, allowing users to engage in live conversations.
- **Post Creation**: Users can create and publish posts, including adding images and captions.
- **Comments**: Users can comment on posts, with real-time updates on new comments.
- **Notifications**: Real-time notifications for likes and comments to keep users engaged.
- **Responsive Design**: The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.


## Live Demo

You can try out the live demo of the app [here](https://vite-shadcn-mern-redux-socket-instaclone.onrender.com).

## Folder Structure

```
project-root/
├── backend/                 # Backend server code
│   ├── controllers/         # Controllers for handling API requests
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration files (e.g., database, environment variables)
│   ├── middleware/          # Middleware for handling requests
│   ├── .env                 # Environment variables
│   ├── server.js            # Main entry point for the server
│   ├── package.json         # Backend dependencies and scripts
│   └── README.md            # Backend README
├── frontend/                # Frontend React application
│   ├── public/              # Public static files (e.g., index.html, images)
│   ├── src/                 # Source code for the frontend
│   │   ├── components/      # React components
│   │   ├── pages/           # React pages/screens
│   │   ├── hooks/           # Custom React hooks
│   │   ├── redux/           # Redux slices and store configuration
│   │   ├── styles/          # Global styles and CSS files
│   │   ├── utils/           # Utility functions for the frontend
│   │   ├── App.js           # Main React component
│   │   ├── index.js         # Entry point for React
│   │   └── routes.js        # Application routes
│   ├── .env                 # Environment variables for frontend
│   ├── package.json         # Frontend dependencies and scripts
│   └── README.md            # Frontend README
├── .gitignore               # Git ignore file
├── LICENSE                  # License file
└── README.md                # Project root README


```


## GIF's

<img src="https://github.com/nishkarsh25/VITE-SHADCN-MERN-REDUX-SOCKET-InstagramClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 

## Technologies Used

### Frontend

- **React**: A popular JavaScript library for building user interfaces. It allows for the creation of reusable UI components and efficient updates to the user interface.
- **Tailwind CSS**: A utility-first CSS framework for styling the application. It enables rapid UI development with predefined classes for styling.
- **Axios**: A promise-based HTTP client for making API requests. It simplifies data fetching and error handling in the React application.
- **React Router**: A library for handling routing within the React application. It allows for the creation of single-page applications with multiple views.
- **Socket.io-client**: A library for real-time communication in the frontend. It connects to the server to receive and send real-time updates and messages.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. It allows for building scalable server-side applications using JavaScript.
- **Express**: A minimal and flexible Node.js web application framework. It simplifies the creation of RESTful APIs and handling HTTP requests.
- **MongoDB**: A NoSQL database for storing application data. It provides a flexible schema and high performance for data management.
- **Socket.io**: A library for enabling real-time communication between clients and the server. It supports WebSocket and other transport protocols.

### Other Tools

- **Redux**: A state management library for JavaScript applications. It helps manage the application state and synchronize data between components.
- **Sonner**: A library for displaying toast notifications, providing feedback to users for various actions and events.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/VITE-SHADCN-MERN-REDUX-SOCKET-InstagramClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node index.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```


## Usage

1. **Run the development server**:

   ```bash
   cd client
   npm start
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use

### Features

#### User Authentication

- **Register**: Users can create a new account by providing a username, email, and password. A confirmation email may be sent to verify the account.
- **Login**: Users can log in using their email and password. On successful login, a JWT token is issued and stored in local storage for authenticated API requests.
- **Logout**: Users can log out, which clears the JWT token from local storage and ends the session.

#### Profile Management

- **View Profile**: Users can view their own profile and other users' profiles, including profile pictures and bios.
- **Edit Profile**: Users can update their profile information such as username, bio, and profile picture.

#### Real-Time Chat

- **Send Messages**: Users can send text messages to other users in real-time.
- **Receive Messages**: Users receive new messages in real-time as they are sent by other users.
- **View Conversation History**: Users can view the history of messages exchanged with a selected user.

#### Post Creation

- **Create Posts**: Users can create new posts with optional images and captions.
- **View Posts**: Users can view posts created by themselves and others in their feed.
- **Delete Posts**: Users can delete their own posts.

#### Comments

- **Add Comments**: Users can comment on posts.
- **View Comments**: Users can view comments on posts.

#### Notifications

- **Like Notifications**: Users receive real-time notifications when their posts are liked.
- **Comment Notifications**: Users receive real-time notifications when comments are made on their posts.

### API Endpoints

#### User Authentication

- **Register**: `POST /api/v1/auth/register`
  - **Request Body**: 
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**: 
    ```json
    {
      "success": true,
      "message": "User registered successfully"
    }
    ```

- **Login**: `POST /api/v1/auth/login`
  - **Request Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**: 
    ```json
    {
      "success": true,
      "token": "string",
      "user": {
        "id": "string",
        "username": "string",
        "email": "string"
      }
    }
    ```

- **Logout**: `POST /api/v1/auth/logout`
  - **Headers**: `Authorization: Bearer <token>`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "User logged out successfully"
    }
    ```

#### Profile Management

- **Get Profile**: `GET /api/v1/users/:id`
  - **Response**:
    ```json
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "bio": "string",
      "profilePicture": "string"
    }
    ```

- **Update Profile**: `PUT /api/v1/users/:id`
  - **Request Body**:
    ```json
    {
      "username": "string",
      "bio": "string",
      "profilePicture": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Profile updated successfully"
    }
    ```

#### Chat

- **Send Message**: `POST /api/v1/message/send/:receiverId`
  - **Request Body**:
    ```json
    {
      "textMessage": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "newMessage": {
        "id": "string",
        "senderId": "string",
        "receiverId": "string",
        "message": "string",
        "timestamp": "ISO8601"
      }
    }
    ```

- **Get Messages**: `GET /api/v1/message/:conversationId`
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "senderId": "string",
        "receiverId": "string",
        "message": "string",
        "timestamp": "ISO8601"
      }
    ]
    ```

#### Posts

- **Create Post**: `POST /api/v1/post/addpost`
  - **Request Body** (FormData):
    - `caption`: "string"
    - `image`: File (optional)
  - **Response**:
    ```json
    {
      "success": true,
      "post": {
        "id": "string",
        "authorId": "string",
        "caption": "string",
        "image": "string",
        "createdAt": "ISO8601"
      },
      "message": "Post created successfully"
    }
    ```

- **Get Posts**: `GET /api/v1/post/all`
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "authorId": "string",
        "caption": "string",
        "image": "string",
        "createdAt": "ISO8601"
      }
    ]
    ```

- **Delete Post**: `DELETE /api/v1/post/:id`
  - **Response**:
    ```json
    {
      "success": true,
      "message": "Post deleted successfully"
    }
    ```

#### Comments

- **Add Comment**: `POST /api/v1/post/:postId/comment`
  - **Request Body**:
    ```json
    {
      "text": "string"
    }
    ```
  - **Response**:
    ```json
    {
      "success": true,
      "comment": {
        "id": "string",
        "authorId": "string",
        "postId": "string",
        "text": "string",
        "createdAt": "ISO8601"
      }
    }
    ```

- **Get Comments**: `GET /api/v1/post/:postId/comments`
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "authorId": "string",
        "postId": "string",
        "text": "string",
        "createdAt": "ISO8601"
      }
    ]
    ```

#### Notifications

- **Get Notifications**: `GET /api/v1/notifications`
  - **Response**:
    ```json
    [
      {
        "id": "string",
        "type": "string",
        "message": "string",
        "timestamp": "ISO8601"
      }
    ]
    ```



## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.


## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.
  
- **Vite**: A fast build tool that serves your code via native ESM. Visit [Vite](https://vitejs.dev/) for more information.

- **Shadcn UI**: A component library providing a set of highly customizable UI components built for React. Visit [Shadcn UI](https://ui.shadcn.com/docs/installation/vite) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **React Router**: React Router is a library for routing in React applications, allowing for navigation between different components. Visit [React Router](https://reactrouter.com/) for more information.

- **Redux**: Redux is a predictable state container for JavaScript applications, providing a centralized store for managing application state. Visit [Redux](https://redux.js.org/) for more information.

- **React Redux**: React Redux is the official React binding for Redux, enabling React components to interact with the Redux store. Visit [React Redux](https://react-redux.js.org/) for more information.

- **Axios**: Axios is a promise-based HTTP client for making asynchronous requests in JavaScript applications. Visit [Axios](https://axios-http.com/) for more information.

- **Express**: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Visit [Express](https://expressjs.com/) for more information.

- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution for modeling application data. Visit [Mongoose](https://mongoosejs.com/) for more information.

- **JSON Web Token (JWT)**: JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties. It is commonly used for authentication and authorization in web applications. Visit [JWT](https://jwt.io/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.



## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkarsh25)
  - Email: bm21btech11016@gmail.com

