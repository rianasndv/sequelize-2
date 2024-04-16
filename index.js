//Import express
import express from "express";
//Import cors
import cors from "cors";
//Import connection
import db from "./config/database.js";
//Import route
import router from "./routes/routes.js";

//Init express
const app = express();
//Use express json
app.use(express.json());
//Use cors
app.use(cors());

//Testing database connection
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.log('Unable to connect to the database:', error);
}

//Use router
app.use(Router);

//Listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));