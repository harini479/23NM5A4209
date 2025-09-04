import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatisticsPage = ({ urls }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {urls.map((item, index) => (
        <Card key={index} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography><b>Original:</b> {item.longUrl}</Typography>
            <Typography><b>Shortened:</b> {item.shortUrl}</Typography>
            <Typography><b>Expiry:</b> {item.expiry || "Not set"}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatisticsPage;
