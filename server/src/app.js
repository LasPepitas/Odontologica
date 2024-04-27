import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Add your routes here
export default app;
