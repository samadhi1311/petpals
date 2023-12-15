# **PetPals**

&nbsp;

## How to install locally on your PC for development

### Prerequisites:

1. Git for Windows.
2. GitHub for desktop.
3. NodeJS
4. MongoDB Atlas Community Edition

### Create a development workspace:

1. Sign into your account on GitHub desktop.
2. Download the code as zip file.
3. Extract the zip file.
4. Open the project with Visual Studio Code.
5. If VS Code prompts to open the parent folder which has the .git repo, then select always.
6. Now open VS Code terminal and run command `npm install` to install required development packages.
7. After installing packages, run command `npm run dev` to start local server.
8. Click on the '`➜ Local: http://localhost:5173/`' to open the web app on browser.

   &nbsp;

   &nbsp;

## Project Plan

**Create components for each page:**

1. Home, Add, Discover, Blog, About, Login, Signup, Posts, and Profile.
2. Implement React Router for navigation between these pages.

   &nbsp;

**Page Functionality:**

1. Home: Display featured posts or relevant information.
2. Add: Form to add a pet, including image upload and relevant details.
3. Discover: List posts with filters for users to find pets for adoption.
4. Blog: Display pet care information.
5. About: Provide information about the project and developer.
6. Login and Signup: Implement user authentication pages.
7. Posts: Dynamically display complete post details.
8. Profile: Show user details dynamically.

   &nbsp;

**User Authentication:**

1. Create login and signup pages using Firebase authentication.
2. Implement user authentication and authorization based on user types (Individual or Organization).
3. Use React Context or Redux to manage user authentication state globally.

   &nbsp;

**Chat System:**

1. Integrate Firebase for real-time chat functionality.
2. Implement a chat feature on the post page for users to discuss adoption details.

   &nbsp;

**Styling and Animation:**

1. Use CSS for styling.
2. Implement animations with Framer Motion for a more interactive user experience.

   &nbsp;

**Testing:**

1. Conduct thorough testing of each component and page.
2. Test user authentication, database interactions, and the chat system.

   &nbsp;

**Deployment:**

1. Deploy your web app on hosting platforms like Vercel.
2. Set up environment variables for sensitive information.

   &nbsp;

**Documentation:**

1. Document your code, especially complex logic or configurations.
2. Provide a README with instructions on how to run the project locally.

   &nbsp;

**Optimization:**

1. Optimize the performance of your app, especially for data fetching and rendering.

   &nbsp;

**Future Enhancements:**

1. Consider additional features for future enhancements, such as notifications, search functionality, etc.
