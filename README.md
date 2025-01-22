# spring-google-auth-2.0

## Overview
This project is a Spring Boot application that integrates Google authentication. It uses Maven for dependency management and Angular for the front-end.

## Technologies Used
- Java
- Spring Boot
- Maven
- TypeScript
- JavaScript
- npm
- Angular

## Prerequisites
- JDK 11 or higher
- Maven 3.6 or higher
- Node.js 14 or higher
- npm 6 or higher

## Setup Instructions

### Backend (Spring Boot)
1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/spring-google-auth-2.0.git
    cd spring-google-auth-2.0
    ```

2. **Configure Google OAuth2 credentials in `application.properties`:**
   - Open the `src/main/resources/application.properties` file.
   - Add the following lines, replacing `YOUR_CLIENT_ID` and `YOUR_CLIENT_SECRET` with your actual Google OAuth2 credentials:
    ```properties
    spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
    spring.security.oauth2.client.registration.google.client-secret=YOUR_CLIENT_SECRET
    ```

3. **Build and run the Spring Boot application:**
   - Ensure you have JDK 11 or higher installed.
   - Run the following commands to build and start the application:
    ```sh
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend (Angular)
1. **Navigate to the `frontend` directory:**
    ```sh
    cd frontend
    ```

2. **Install dependencies:**
   - Ensure you have Node.js 14 or higher and npm 6 or higher installed.
   - Run the following command to install the required npm packages:
    ```sh
    npm install
    ```

3. **Run the Angular application:**
   - Start the Angular development server with the following command:
    ```sh
    ng serve
    ```

4. **Access the application:**
   - Open your web browser and navigate to `http://localhost:4200`.

## Usage
- Access the application at `http://localhost:4200`.
- Click on the "Login with Google" button to authenticate using your Google account.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.