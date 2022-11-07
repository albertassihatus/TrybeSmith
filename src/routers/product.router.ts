import { Router } from 'express';

import * as productControllers from '../controllers/product.controller';

const router = Router();

router.post('/', productControllers.create);
router.get('/', productControllers.getAll);

export default router;