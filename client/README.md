
# Task Management System

This Task Management System is a web application developed using React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for the database. The project incorporates user authentication with roles: customer and user.


## 🌐 Features

* __User Authentication:__ 
   * Customer, Employee, and User login functionality.
   * Secure authentication using JSON Web Tokens (JWT).
   
* __Role-based Access:__ 

  * Different roles (Customer, Employee, User) with   specific privileges.
  * Customers can assign tasks to other customer.
Users can view assigned tasks and mark them as completed.

* __Task Management:__ 

   * Customers can create and assign tasks to specific customers.
   * User can see assigned tasks and provide updates on completion.

* __API Endpoints::__ 

   * Well-defined APIs for various functionalities, ensuring seamless integration with frontend.
## 🖥️ Tech Stack

 * __Frontend__:

   * React.js for building the user interface.
     CSS and Bootstrap for styling.
   * React Bootstrap for enhanced UI components.
* __Backend__:

   * Node.js with Express.js for server-side development.
  * MongoDB for data storage.
## 🎯 Getting Started

1. __Install Dependencies:__
        
                cd client
                  npm install

2. __Configure Environment Variables:__

* Create a .env file in the root directory and configure the following variables:

       PORT=3000
       MONGODB_URI=your_mongodb_connection_string
       JWT_SECRET=your_jwt_secret_key
3. __Run the Application:__
           
                         npm run dev to run locally

4. __Access the Application:__

* Open your browser and navigate to http://localhost:5173/.





## 📌 Project Structure:

* __client :__ React.js frontend code.
* __server :__ Node.js backend code.
## 🗝️ Sample User Logins :

1. __User Login:__

* Email : surajsbc@gmail.com
* Password : pass@123

2. __Customer Login :__
* Email : wavsuraj@gmail.com
* Password : pass@123

