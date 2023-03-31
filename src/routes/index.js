import { Router } from 'express';
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';
import orderRoutes from './orderRoutes';

const apiRouter = Router();

apiRouter.use('/product', productRoutes);
apiRouter.use('/user', userRoutes);
apiRouter.use('/order', orderRoutes);

apiRouter.get('/', (req, res) => {
res.send('Hello World!')
})

export default apiRouter;