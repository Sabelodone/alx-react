React Components Splitting Task
This task involves splitting a React application into separate components to improve organization and maintainability. The main goals are to create reusable components and to ensure that the application functions correctly after the splitting process.

Steps to Complete the Task:
Create Components:

Create separate components for Header, Footer, Login, and Notifications.
Move the code for each component into its own file.
Move related CSS code into separate CSS files for each component.
Modify Shell:

Update the App.js file to serve as the main entry point for the application.
Import the newly created components into App.js.
Wrap the components within the App.js file with a React Fragment.
Replace existing code in App.js with imports of the newly created components.
Additional Steps:

Resolve any import errors or warnings related to missing files or variables.
Ensure that CSS styles are applied correctly to each component.
Verify that the application functions as expected by reloading the page.
Folder Structure:
The project folder structure should resemble the following:

css
Copy code
src/
├── App/
│   ├── App.js
│   ├── App.test.js
│   ├── App.css
├── Header/
│   ├── Header.js
│   ├── Header.css
│   ├── Header.test.js
├── Footer/
│   ├── Footer.js
│   ├── Footer.css
│   ├── Footer.test.js
├── Login/
│   ├── Login.js
│   ├── Login.css
│   ├── Login.test.js
├── Notifications/
│   ├── Notifications.js
│   ├── Notifications.css
│   ├── Notifications.test.js
utils/
│   ├── utils.js
│   ├── utils.test.js
assets/
│   ├── close-icon.png
│   ├── logo.png
Running the Application:
To run the application, follow these steps:

Clone the repository.
Navigate to the project directory.
Install dependencies with npm install.
Start the development server with npm start.
Author:
[Sabelo Sibaya]

Acknowledgments:
This task is part of [react] for [Alx Africa]. Special thanks to [Instructor/Supervisor Name] for guidance and support.

Feel free to customize this README.md to fit your specific project requirements and details.