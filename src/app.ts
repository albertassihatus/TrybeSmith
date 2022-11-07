import express from 'express';

import router from './routers';

const app = express();

app.use(express.json());

app.use('/products', router.products);
app.use('/users', router.users);
app.use('/orders', router.order);

export default app;
