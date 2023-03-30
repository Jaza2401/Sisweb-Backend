import { Router } from 'express';
import {createProduct, getAllProducts, getProductById, deleteProduct, updateProduct}
from '../controllers/productControler';

const productRouter = Router();

productRouter.get('/', getAllProducts);
productRouter.get('/:id', getProductById);
productRouter.post('/', createProduct);
productRouter.patch('/:id', updateProduct);
productRouter.delete('/', deleteProduct);

export default productRouter;