import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const UrlShortenerForm = ({ onSubmit }) => {
  const [longUrl, setLongUrl] = useState("");
  const [validity, setValidity] = useState("");
  const [shortcode, setShortcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Client-side validation
    if (!longUrl.startsWith("http")) {
      alert("Enter a valid URL (must start with http/https)");
      return;
    }
    if (validity && isNaN(validity)) {
      alert("Validity must be a number in minutes");
      return;
    }

    onSubmit({ longUrl, validity, shortcode });
    setLongUrl("");
    setValidity("");
    setShortcode("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <TextField
        label="Original URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <TextField
        label="Preferred Shortcode"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Shorten
      </Button>
    </Box>
  );
};

export default UrlShortenerForm;
