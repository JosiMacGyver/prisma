import getAll from "./server/product/getCandidate";
import create from "./server/product/createCandidate";
import fastify from "./server/utils/server";
import { Candidate } from "@prisma/client";


fastify.get('/candidate', async function handler() {
    const candidate = await getAll();
    return candidate;
})

fastify.post('/candidate', async function handler(request, reply) {
    const data = request.body as Candidate;
    const candidate = await create(data);
    return candidate;
})


try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}