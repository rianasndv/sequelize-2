// Import sequelize
import { Sequelize } from "sequelize";

// Create connection
const db = new Sequelize('sequelize_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// Export connection
export default db;