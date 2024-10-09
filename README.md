# Banking App Project

## Demo
https://banking-app-rosy-nu.vercel.app/

## Project Description

This project is a web application that allows users to manage their wallet balance and view transaction history. The application consists of two main pages:

### 1. **User Wallet Page**
- Displays the user's current wallet balance.
- Includes buttons to:
    - **Add funds**: Allows the user to add money to their wallet.
    - **Withdraw funds**: Allows the user to withdraw money from their wallet.
    - **Transfer funds**: Enables the user to transfer money to another account using an IBAN.
- At the bottom of the page, there is a **Transactions block**, which shows the latest 10 transactions.
- In the **header of the transactions block**, there are two action buttons:
    - **Revert transactions**: Reverts all recent transactions and restores the wallet to its original state.
    - **View all**: Redirects the user to the **Summary page** for a complete transaction history.

### 2. **Summary Page**
- Displays a table with information about all transactions.
- The table supports pagination, allowing the user to browse through multiple pages of transactions.
- The table also allows sorting of transactions by different columns (e.g., date, amount).
- A **Back to Wallet** button is available at the top, which redirects the user back to the **User Wallet Page**.

## Installation and Running

### Install Dependencies
```bash
npm install
```

### Run the project in development mode
```bash
npm run dev
```

### Build and run the project in production mode
```bash
npm run build
npm run start
```

### Build and start the project with a single command
```bash
npm run build-start
```

### Run tests
```bash
npm run test
```

## CI/CD Process

The project is automatically deployed to Vercel whenever the `main` branch is updated. Upon updating the branch, tests are executed, followed by the production deployment process.

## Technical Description

The project is built using **Next.js** with the App Router.

- **Data fetching and caching** are implemented using the built-in `fetch` function. Data is cached with tags, and cache invalidation is handled through tag-based invalidation.
- A **mock remote server** is implemented using route handlers in Next.js.
- **MongoDB** is used as the storage solution for the wallet balance and transactions. It simply overwrites the current state in a single collection.

### Why MongoDB?

Initially, the idea was to store the database in a `database.json` file. However, Vercel (like many other hosting platforms) does not fully support writing to files, allowing only reading. An alternative using an object in a TypeScript file or storing data in the `/tmp` folder was considered but dismissed, as it depends on Vercel's internal configuration, which can be unstable. Due to these limitations, MongoDB was chosen as the storage solution.

## Deployment

The project is automatically deployed to Vercel when the `main` branch is updated.