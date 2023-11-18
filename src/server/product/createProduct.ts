import { Product } from "@prisma/client";
import prisma from "../utils/api"

const create = async (data:Product) => {

    const product = await prisma.product.create({
        data
    });

    return product;
}

export default create;