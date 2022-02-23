const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// handle middleware for get json body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/buildings", require("./routes/buildingRoutes"));
app.use("/api/translists", require("./routes/transListRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/chatrooms", require("./routes/chatroomRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
