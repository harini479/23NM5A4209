import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const UrlList = ({ urls }) => {
  return (
    <div>
      {urls.map((item, index) => (
        <Card key={index} sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography><b>Original:</b> {item.longUrl}</Typography>
            <Typography><b>Shortened:</b> {item.shortUrl}</Typography>
            {item.expiry && (
              <Typography><b>Expires in:</b> {item.expiry} minutes</Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UrlList;
