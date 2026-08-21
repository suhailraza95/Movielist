require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const monitoringRoutes = require("./routes/monitoringRoutes");

const apiKeyMiddleware = require("./middleware/apiKeyMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const requestIdMiddleware = require("./middleware/requestIdMiddleware");
const requestLogger = require("./middleware/requestLogger");
const metricsMiddleware = require("./middleware/metricsMiddleware");

const app = express();

connectDB();

app.use(express.json());

app.use(requestIdMiddleware);
app.use(requestLogger);
app.use(metricsMiddleware);

app.use("/api", apiKeyMiddleware, userRoutes);
app.use("/api", apiKeyMiddleware, movieRoutes);

app.use("/", monitoringRoutes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log("Server running 🚀");
});