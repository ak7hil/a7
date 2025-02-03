import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = !!location.state?.blog;
  
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  useEffect(() => {
    if (isEdit) {
      setInputs(location.state.blog);
    }
  }, [isEdit, location.state?.blog]);

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (isEdit) {
        await axios.put(`http://localhost:3001/update/${inputs._id}`, inputs);
      } else {
        await axios.post("http://localhost:3001/create", inputs);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        p: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 600,
        }}
      >
        <TextField
          variant="outlined"
          label="Title"
          name="title"
          value={inputs.title}
          onChange={inputHandler}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Content"
          name="content"
          value={inputs.content}
          onChange={inputHandler}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          variant="outlined"
          label="Image URL"
          name="img_url"
          value={inputs.img_url}
          onChange={inputHandler}
          fullWidth
        />
        <Button 
          variant="contained" 
          color="secondary" 
          onClick={handleSubmit}
          size="large"
        >
          {isEdit ? "Update Blog" : "Create Blog"}
        </Button>
      </Box>
    </Box>
  );
};

export default Add;