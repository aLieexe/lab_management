import { connectDB } from './config/db.js';
import express from 'express';

import labRouter from './routes/labRoutes.js';
import activityRouter from './routes/labActivityRoutes.js';
import equipmentRouter from './routes/equipmentRoutes.js';

const app = express();

app.use(express.json());

app.use('/lab', labRouter);
app.use('/activity', activityRouter);
app.use('/equipment', equipmentRouter);

connectDB();

app.listen(process.env.PORT, () => {
    console.log('Currently listening on http://localhost:3000')
})