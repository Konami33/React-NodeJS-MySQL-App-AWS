// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const db = require('./models');
// const userRoutes = require('./routes/user');
// const homeRoutes = require('./routes/home'); 
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // using cors
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/', homeRoutes);
// app.use('/users', userRoutes);

// // start server
// const startServer = async () => {
//     try {
//         await db.sequelize.sync();
//         console.log("Connected to database successfully.");
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error("Unable to sync database:", err);
//     }
// };

// // calling the function
// startServer();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
    const message = "Hello world from the backend! 🚀";
    console.log(message);
    res.json({ message });
});

app.listen(PORT, () => {
    console.log(`Server Running at port ${PORT}`);
});