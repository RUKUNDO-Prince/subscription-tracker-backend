import express from 'express';
import { PORT } from './config/env.js';

// ROUTES IMPORTS
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the backend of our Subscription Tracker Application');
});

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`SERVER is running on port ${PORT}`);
});

export default app;