# Expense Tracker App

This is an Expense Tracker App developed using the MERN stack (MongoDB, Express.js, React, Node.js) with interactive UI components.

## Introduction

The Expense Tracker App is a web application designed to help users efficiently manage their expenses. The app allows users to track transactions, organize expenses into categories, and visualize spending patterns.

## Technologies

- **MongoDB**: Used as the backend database for storing categories and transactions data.
- **Express.js**: Serves as the backend framework for handling HTTP requests and API endpoints.
- **React**: Utilized for the frontend development, creating interactive and dynamic user interfaces.
- **Node.js**: The runtime environment for executing server-side JavaScript code.
- **JavaScript**: The primary programming language used for both frontend and backend development.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js for database access and management.

## Features

- **CRUD Operations**: Create, read, update, and delete operations for managing categories and transactions.
- **Grid with Paging & Sorting**: Enhanced data presentation and accessibility using React components.
- **Dashboard with Chart Elements**: Visual insights into spending patterns with various chart elements.
- **Side Menu within Dockable Sidebar**: Easy navigation across different sections of the application.
- **Login and Logout Authentication**: Secure user authentication for accessing the application.

## Architecture

The Expense Tracker App follows the Model-View-Controller (MVC) architecture:

- **Model**: Represents the data and business logic of the application, including entities like categories and transactions, and services for data manipulation.
- **View**: Displays the user interface of the application, built with React components.
- **Controller**: Handles user requests, processes input, and interacts with the model and view to generate appropriate responses.

## Modules

1. **Authentication Module**
   - Manages user authentication and authorization.
   - Features user registration, login, logout, and password management.
   - Uses JSON Web Tokens (JWT) for secure authentication.

2. **Expense Tracking Module**
   - Core module for managing expense transactions and categories.
   - Supports CRUD operations for transactions and categories.
   - Provides filtering, sorting, and searching functionalities.

3. **Dashboard Module**
   - Customizable dashboard for viewing key metrics and summaries.
   - Includes charts and graphs to visualize spending patterns.
   - Allows users to configure and personalize their dashboard.

4. **Category Management Module**
   - Handles CRUD operations for expense categories.
   - Allows users to manage custom categories.

5. **User Profile Module**
   - Manages user profiles and account settings.
   - Allows users to update profile information and account preferences.

## Flow of the App

1. **Authentication**: Users must log in to access the application.
2. **Dashboard**: Post-login, users are directed to the dashboard for visual spending insights.
3. **Category Management**: Users can manage expense categories.
4. **Transaction Tracking**: Users can record transactions with details like date, amount, description, and category.
5. **Navigation**: Users navigate between sections using the sidebar menu.
6. **Logout**: Users can log out to end their session securely.

## Users

The app caters to individuals or businesses looking to manage their expenses. It is suitable for anyone who wants to track spending habits, categorize expenses, and gain financial insights.

## Additional Points

- **Security**: Implement robust authentication and authorization to ensure data privacy and prevent unauthorized access.
- **Localization**: Consider adding support for multiple languages for broader accessibility.
- **Scalability**: Design for scalability to handle growth in data and user base.
- **Performance Optimization**: Optimize database queries, frontend rendering, and server-side processing.
- **Error Handling**: Implement error handling to provide meaningful error messages and ensure smooth operation.
- **Documentation**: Provide comprehensive documentation, including installation instructions, usage guidelines, and troubleshooting tips.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/TheFurious77/Expense_App.git
![Screenshot (1582)](https://github.com/user-attachments/assets/8db576a5-e12e-4295-8984-d35b892a917a)
![Screenshot (1585)](https://github.com/user-attachments/assets/2349ba48-c9fc-4982-8069-8131d3d34fcc)
![Screenshot (1583)](https://github.com/user-attachments/assets/a8e219a6-f834-43cb-a9cd-facfc646fb15)
![Screenshot (1584)](https://github.com/user-attachments/assets/d0e282e5-c2da-472f-8ace-c264dc0153ee)
