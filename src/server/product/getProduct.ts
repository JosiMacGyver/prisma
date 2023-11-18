import prisma from "../utils/api"

const getAll = async () => {
    const products = await prisma.product.findMany();

    return products;
}

export default getAll;