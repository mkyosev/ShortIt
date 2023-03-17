import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient();

async function getUrl(req, res) {

    const { slug } = req.body;

    try {
        if (slug != undefined) {
            const url = await prisma.url.findUnique({
                where: {
                    slug: slug,
                }
            })
            res.status(200).json(url);
        } else {
            res.status(401).json({ error: 'Short url does not exists' })
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Short url does not exists' })
    }

}

export default getUrl