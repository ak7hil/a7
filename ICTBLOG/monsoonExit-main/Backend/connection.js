const mongoose = require("mongoose");

const DB_URI = "mongodb+srv://akhil:@cluster0.3zv5b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
  });
