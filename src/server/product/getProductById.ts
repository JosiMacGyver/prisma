import prisma from "../utils/api"

const getById = async (id:string) => {
    const product = await prisma.product.findUnique({
        where:{
            id,
        }
    });

    return product;
}

export default getById;