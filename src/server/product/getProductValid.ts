import prisma from "../utils/api"

const getValid = async () => {
    const products = await prisma.product.findMany({
        where:{
            expiry_date:{
                gte: new Date(),
            }
        }
    })

    return products;
}

export default getValid;