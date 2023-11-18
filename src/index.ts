import getAll from "./server/product/getProduct";
import create from "./server/product/createProduct";
import getById from "./server/product/getProductById";
import update from "./server/product/updateProduct";
import deleteProduct from "./server/product/deleteProduct";
import getValid from "./server/product/getProductValid";
import fastify from "./server/utils/server";
import { Product } from "@prisma/client";


fastify.get('/product', async function handler() {
    const products = await getAll();
    return products;
})

fastify.get('/product/:id', async function handler(request, reply) {
    const {id} = request.params as {id:string};
    const product = await getById(id);
    return product    
})

fastify.get('/product/valid',async function handler() {
    const products = await getValid();
    return products
})

fastify.post('/product', async function handler(request, reply) {
    const data = request.body as Product;
    const product = await create(data);
    return product;
})

fastify.put('/product/:id', async function handler(request, reply) {
    const {id} = request.params as {id:string};
    const data = request.body as Product;

    const product = await update(id, data);
    return product;
})


fastify.delete('/product/:id', async function handler(request, reply) {
    const {id} = request.params as {id:string};

    const product = await deleteProduct(id);
    return product;
})


try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}