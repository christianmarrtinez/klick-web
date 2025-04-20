const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/auth/tiktok/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Missing code from TikTok');
  }

  try {
    const response = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_key: process.env.TIKTOK_CLIENT_KEY,
        client_secret: process.env.TIKTOK_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.TIKTOK_REDIRECT_URI,
      }),
    });

    const data = await response.json();
    console.log('TikTok token exchange response:', data);

    if (data.access_token) {
      return res.redirect(`https://klickcontent.com/success?token=${data.access_token}`);
    } else {
      return res.status(500).json(data);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send('Error during token exchange');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
