# Market 24/7 Project

## Overview

Market 24/7 is a web application designed to provide users with a seamless shopping experience. This project includes user authentication and authorization features, developed using **Node.js**, **Express.js**, and **PostgreSQL**. The application ensures security with **bcrypt** for password hashing and offers a responsive design for mobile and desktop users.

## Features

- **User Authentication**: Secure login and sign-up functionality.
- **Authorization**: Role-based access to specific application features.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Scalable Backend**: Built with Node.js and Express.js for robust performance.
- **Database Integration**: PostgreSQL for reliable data storage and management.

## Prerequisites

Before setting up the project, ensure you have the following:

- **Node.js**: Version 14 or higher is recommended. [Download Node.js](https://nodejs.org/)
- **PostgreSQL**: Install and configure PostgreSQL for database operations.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Aadityavv/Market-24-7.git
   cd Market-24-7
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     DB_HOST=your_database_host
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_NAME=your_database_name
     JWT_SECRET=your_jwt_secret
     ```
   Replace the placeholders with your PostgreSQL and application credentials.

## Usage

After installation, you can start the application using:

```bash
npm start
```

The application will run on `http://localhost:3000` by default.

## Project Structure

- `routes/`: Defines the application's routes.
- `controllers/`: Handles the logic for each route.
- `models/`: Contains database models and queries.
- `middlewares/`: Includes middleware functions for authentication and error handling.
- `public/`: Hosts static files like CSS and JavaScript.
- `views/`: Contains frontend templates for rendering.

## Scripts

The following scripts are available in the `package.json` file:

- `start`: Starts the application in production mode.
- `dev`: Starts the application in development mode using Nodemon.
- `test`: Runs the test suite.

## Dependencies

Key dependencies include:

- **Express**: Web framework for Node.js.
- **PostgreSQL**: Database integration.
- **Bcrypt**: For secure password hashing.
- **Jsonwebtoken**: For handling JWT-based authentication.

For a complete list, refer to the `package.json` file.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/) for the web framework.
- [PostgreSQL](https://www.postgresql.org/) for database support.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) for secure password management.

## Contact

For questions or support, please open an issue in the repository or contact the maintainer at aadityavv9@gmail.com.
