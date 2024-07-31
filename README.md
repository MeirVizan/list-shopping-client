#################################################################
# Shopping List Frontend Project
#################################################################

This project provides a frontend for a shopping list application where users can manage their shopping experiences by adding products, viewing purchases, and checking out their shopping baskets. It utilizes React with TypeScript and Material-UI for a responsive design that works well on both desktop and mobile devices.

## Features

- Add products to a shopping list with categories.
- View a list of all added products along with their quantities.
- See a total count of all items in the shopping list.
- Responsive design for mobile and desktop usage.
- View historical purchases in a detailed format. (new feature i added the the app )

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Redux Toolkit**: For state management.
- **Material-UI**: A popular React UI framework with ready-to-use components that follow Google's Material Design.
- **Axios**: Promise-based HTTP client for the browser and node.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- npm (Node Package Manager)

git clone https://github.com/yourusername/shopping-list-front.git
cd shopping-list-front

npm install

npm start


#################################################################
# Shopping List Server Project
#################################################################

This project is the server-side implementation for a shopping list application, designed to handle API requests for managing shopping items and historical purchases. It uses Node.js with Express for the server logic, Sequelize as the ORM for database interactions, and provides endpoints for both real-time and historical data management.

## Features

- REST API endpoints to add and fetch products.
- Endpoint to view all historical purchases with detail.
- Data validation and error handling.
- Integration with SQL databases using Sequelize.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Minimal and flexible Node.js web application framework.
- **Sequelize**: A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **SQLite**: A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

npm install 

### Initialize the database
npm run db:init

npm start

