import express from 'express';
import router from './router';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
process.on('SIGTERM', () => {
	process.exit();
});
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

export default app;