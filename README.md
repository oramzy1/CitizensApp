PROJECT OVERVIEW

PROJECT NAME: Incident Reports App

The application is a user-centric incident reporting platform designed for individuals to report and manage incidents. It integrates a WordPress backend containerized using Docker, a Cordova-based mobile-friendly frontend, and GraphQL and REST APIs for seamless communication between the client and server.

FEATURES
1. User Authentication

-   Register new users with proper validation.
-   Login functionality with credentials stored securely.
-   Logout functionality to clear user sessions.

2. Incident Reporting
-   Users can post incidents with titles, descriptions.
-   Incidents are stored in the WordPress backend and displayed dynamically.

3. Incident Management
-   Users can view their previously reported incidents.
-   Real-time fetching of data via GraphQL and REST APIs.

4. Responsive Design
-   Optimized for both desktop and mobile devices via Cordova containerization.

5. Secure API Integration
-   Backend communication secured using Base64-encoded authentication.

TECHNOLOGIES USED
1. Frontend
-   Cordova: Used to containerize the web application for deployment on mobile devices.
-   HTML, CSS, and JavaScript: Core technologies for creating a dynamic and user-friendly interface.
-   GraphQL: For precise data querying and interaction with the backend.
-   REST API: For simpler and conventional API interactions.

2. Backend
-   WordPress: Managed the content and user data.
-   GraphQL Plugin: Enabled flexible API access to backend data.
-   REST API: Utilized WordPress’s native endpoints for simple CRUD operations.

SETUP INSTRUCTION
1. Prerequisites
-   Node.js and npm for Cordova development.
-   A compatible web browser or mobile emulator for testing the frontend.

2. Frontend Setup
-   Install Cordova globally:

    npm install -g cordova
    
-   Clone the frontend repository.
-   Navigate to the project directory and build the app:

cordova build

-   Deploy the app to a mobile emulator or physical device:

cordova run android

TESTING REQUIREMENTS
1. Functional Testing
-   Registration: Verify user registration with both valid and invalid inputs.
-   Login: Ensure the application authenticates users and redirects correctly.
-   Incident Posting: Test posting incidents with and without optional fields.
-   Incident Fetching: Validate that incidents are displayed correctly for authenticated users.

2. Integration Testing
-   Test GraphQL and REST API endpoints for:
-   Data accuracy.
-   Error handling with invalid queries.
-   Authentication headers.

3. Performance Testing
-   Validate backend scalability under concurrent API requests using Docker.
-   Test application responsiveness on mobile devices via Cordova.

API DOCUMENTATION
1. GraphQL Endpoint
-   Base URL: https://showstoppermusicng.com/graphql
-   Common Query Example:
        mutation createIncident($content: String, $title: String, $clientMutationId: String) {
          createIncident(input: { content: $content, title: $title, clientMutationId: $clientMutationId }) {
            incident {
              title
              content
            }
          }
        }

2. REST API Endpoint
-   Base URL: https://showstoppermusicng.com/wp-json/wp/v2/incident
-   Example GET Request:
        fetch('https://showstoppermusicng.com/wp-json/wp/v2/incident?author=AUTHOR_ID', {
          method: 'GET',
          headers: {
            'Authorization': `Basic ${encodedCredentials}`
          }
        });

DEPLOYMENT
1. Backend Deployment:
-   Push Dockerized WordPress backend to a cloud service (e.g., AWS, Azure).
-   Use docker-compose for automated environment setup.

2. Frontend Deployment:
-   Deploy the web application to a static hosting service (e.g., Netlify, Vercel).
-   Bundle Cordova frontend and distribute it via app stores.

FUTURE IMPROVEMENTS
-   Add role-based user permissions for incident management.
-   Enhance the reporting UI with richer media support.
-   Implement email notifications for incident updates.
-   Integrate advanced analytics using plugins like Google Analytics.