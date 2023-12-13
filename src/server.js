// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/v1/auth/login', async (req, res) => {
  try {
    // Мокап ответа сервера при успешной аутентификации
    const mockResponse = {
      user: {
        id: 1,
        email: 'user@example.com',
      },
      access_token: 'mockAccessToken',
      refresh_token: 'mockRefreshToken',
    };

    res.json(mockResponse);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
