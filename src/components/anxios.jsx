import axios from 'axios';

const response = await axios.post(
  'http://85.209.9.201/api/auth/login',
  {
    email: login,
    password: password,
  },
  {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNTc3MzgyLCJpYXQiOjE3MDI0OTA5ODIsImp0aSI6ImNiMzQ3NjEyOWYyMDQzMDc4YWY0ODY5NDk3NTE3MDc1IiwidXNlcl9pZCI6MTF9.fa6t1ed8P5ODnDF9ZyA2Gh1tTVjNaeCOn2f46ZAXvGo`,
    },
  }
);