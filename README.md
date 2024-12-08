# flipr
This is a full-stack web application designed to manage projects, clients, contact form submissions, and newsletter subscriptions. The application includes a landing page for users and an admin panel for managing data.

Landing Page
Our Projects Section: Displays all projects fetched from the backend.
Happy Clients Section: Displays client testimonials fetched from the backend.
Contact Form: Allows users to submit their details. The data is stored in the backend and viewable by the admin.
Newsletter Subscription: Allows users to subscribe to the newsletter. Emails are stored in the backend.
Admin Panel
Project Management: Add new projects, including images, names, and descriptions.
Client Management: Add new clients, including images, names, descriptions, and designations.
View Contact Form Details: Displays all contact form submissions from users.
View Newsletter Subscriptions: Displays all email addresses subscribed to the newsletter.

Technologies Used
Frontend
React.js: Framework for building user interfaces.
Axios: For API requests.
React Router DOM: For routing.
Backend
Node.js: JavaScript runtime for building the backend.
Express.js: Framework for building REST APIs.
MongoDB: Database for storing project, client, contact, and subscription data.
Multer: For image uploading and handling.
Others
CSS: For styling the UI.

Setup Instructions
Prerequisites
Node.js installed (v14+ recommended).
MongoDB installed or a MongoDB Atlas account for cloud storage.
Backend Setup
Navigate to the backend directory:
  cd backend
Install dependencies:
  npm install
Configure environment variables:
Create a .env file in the backend directory and set:
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
Start the backend server:
  npm run dev
Frontend Setup
Navigate to the frontend directory:
  cd frontend
Install dependencies:
  npm install
Start the frontend server:
  npm start
Running the Application
Open your browser and navigate to:
Landing Page: http://localhost:3000
Admin Panel: http://localhost:3000/admin

Additional Features (Optional)
Image Cropping: Images uploaded through the admin panel are automatically cropped to specific dimensions using a cropping utility.
Responsive Design: Both the landing page and admin panel are fully responsive.

Folder Structure
Backend
backend/
  controllers/
    projectController.js
    clientController.js
    contactController.js
    newsletterController.js
  models/
    Project.js
    Client.js
    Contact.js
    Newsletter.js
  routes/
    projectRoutes.js
    clientRoutes.js
    contactRoutes.js
    newsletterRoutes.js
  server.js
  config/
      db.js
Frontend
frontend/
  src/
    components/
      LandingPage.js
      AdminPanel.js
      ProjectForm.js
      ClientForm.js
      ContactTable.js
      NewsletterTable.js
    pages/
      HomePage.js
      AdminPage.js
      App.js
      index.js
