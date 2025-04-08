import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the backend of our Subscription Tracker Application');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;