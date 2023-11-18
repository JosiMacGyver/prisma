import { Product } from "@prisma/client";
import prisma from "../utils/api"
import getById from "./getProductById";

const update = async (id:string, data: Product) => {
    try {
        const isValid = await getById(id)
        if (!isValid)
            throw new Error("Product doesn't exist!")

        const product = await prisma.product.update({
            where: {
                id,
            },
            data
        })
        return product;
    }
    catch (error) {
        console.log(error)
    }
}

export default update