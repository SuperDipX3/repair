// backend/server.js
import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend1!' });
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
