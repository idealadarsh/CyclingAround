# CyclingAround

[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/idealadarshk/workspace/public/collection/13168740-a9727db4-261c-4acd-97df-78412f5083df)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/idealadarsh/CyclingAround)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## Description

**CyclingAround** is an innovative application designed to estimate cycling times to various tourist destinations. If you're an avid cyclist or a tourist looking for an environmentally friendly way to visit destinations, this application has you covered. Given that it provides both an estimate for travel time and eco-friendly transportation options, it's an excellent tool for those aiming for sustainable tourism.

## Features

- Secure user authentication using bcryptjs and JWT.
- Database migrations and seeds for flexible database management.
- Live development environment using nodemon.
- Built upon the robust Express framework and Sequelize ORM for ease of development.

## Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/idealadarsh/CyclingAround.git
   cd CyclingAround
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory. This file should contain all your sensitive data such as database credentials and JWT secret. Reference the application's documentation or codebase to determine the required variables.

4. **Database Initialization**

   Before starting the application, make sure you have a MySQL instance running. Then:

   ```bash
   npm run db:init
   ```

   After initializing the database, run migrations and seeds:

   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Starting the Application**

   For development:

   ```bash
   npm run dev
   ```

   For production:

   ```bash
   npm start
   ```

## Libraries Used

### Dependencies:

- **bcryptjs**: This is a password hashing library. It helps in securely hashing passwords before they're stored in the database.
- **dotenv**: This library allows the application to load environment variables from a `.env` file.
- **express**: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.
- **jsonwebtoken**: This is used for authentication. It securely transmits information between parties as a JSON object.
- **mysql2**: A MySQL driver for Node.js. It's needed for Sequelize to communicate with MySQL databases.
- **sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.

### Dev Dependencies:

- **nodemon**: This is a utility that monitors for any changes in the source code and automatically restarts the server.
- **sequelize-cli**: The Sequelize Command Line Interface (CLI). Useful for handling migrations and seeds.

## Author Details

- **Name**: Adarsh Kumar
- **Github**: [https://github.com/idealadarsh](https://github.com/idealadarsh)
- **LinkedIn**: [https://linkedin.com/in/idealadarsh](https://linkedin.com/in/idealadarsh)

## Links

- **Live Application**: [http://CyclingAround.adarshkumar.me](http://CyclingAround.adarshkumar.me)
- **GitHub**: [https://github.com/idealadarsh/CyclingAround](https://github.com/idealadarsh/CyclingAround)
- **Postman**: [https://www.postman.com/idealadarshk/workspace/public/collection/13168740-a9727db4-261c-4acd-97df-78412f5083df](https://www.postman.com/idealadarshk/workspace/public/collection/13168740-a9727db4-261c-4acd-97df-78412f5083df)

## License

MIT License © 2023 Adarsh Kumar
