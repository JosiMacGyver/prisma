import prisma from "../utils/api"
import getById from "./getProductById";

const deleteProduct = async (id:string) => {
    try {
        const isValid = await getById(id)
        if (!isValid)
            throw new Error("Product doesn't exist!")

        const product = await prisma.product.delete({
            where: {
                id,
            },

        })
        return product;
    }
    catch (error) {
        console.log(error)
    }
}

export default deleteProduct