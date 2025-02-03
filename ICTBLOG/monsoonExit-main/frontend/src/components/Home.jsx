import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogApp = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3001/get");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id}`);
      fetchBlogs(); // Refresh the list
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const handleUpdate = (blog) => {
    navigate("/add", { state: { blog } });
  };

  return (
    <div>
      <Grid container spacing={3} style={{ padding: "20px" }}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={blog.img_url}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h6">{blog.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {blog.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  variant="contained" 
                  color="secondary"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </Button>
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => handleUpdate(blog)}
                >
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogApp;