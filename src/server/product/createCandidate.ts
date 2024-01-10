import { Candidate } from "@prisma/client";
import prisma from "../utils/api"

const create = async (data:Candidate) => {

    const candidate = await prisma.candidate.create({
        data
    });

    return candidate;
}

export default create;