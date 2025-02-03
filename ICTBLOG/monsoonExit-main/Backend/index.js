const express = require("express");
const cors = require("cors");
require('./connection');  
const BlogModel = require("./model");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

// Create
app.post("/create", async (req, res) => {
  try {
    const savedBlog = await BlogModel.create(req.body);
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read
app.get("/get", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update
app.put("/update/:id", async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete
app.delete("/delete/:id", async (req, res) => {
  try {
    await BlogModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});