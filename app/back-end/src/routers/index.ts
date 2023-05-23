import { Router } from 'express';
import nameRouter from './nameRouter';

const router = Router();
 router.use('/drinks', nameRouter);

 export default router;


