import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth/client'
import nanoid from 'nanoid'

const prisma = new PrismaClient();

async function createUrl(req, res) {

    const session = await getSession({ req })
    const { url, slug, isCustomSlug } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            userLevel: true,
            urls: true,
            // Add any additional user fields you need here
        },
    })

    const urls = await prisma.url.count({
        where: {
            userId,
            isCustomSlug: true
        }
    })

    if (user.userLevel == 1 && urls > process.env.MAX_FREE_CUSTOM_URLS && isCustomSlug) {
        res.status(401).json({ error: 'You have reached the maximum amount of free custom links you can create.' })
    }
    else {
        const newUrl = await createUrl(user.id, url, slug, isCustomSlug);
        res.status(200).json({
            newUrl
        })
    }
    // Check if the URL already exists in the database
    const existingUrl = await prisma.url.findUnique({
        where: {
            url: url,
        },
    });


    async function createUrl(userId, url, slug, isCustomSlug) {

        if (isCustomSlug) {
            const urlSlug = await prisma.url.findUnique({
                where: {
                    slug: slug,
                }
            })
            if (!urlSlug) {
                const newUrl = await prisma.url.create({
                    data: {
                        userId,
                        url,
                        slug: rndSlug,
                        isCustomSlug: false,
                        active: true,
                        deleted: false,
                        visits: {
                            create: {
                                userAgent: 'Unknown',
                                ipAddress: '127.0.0.1',
                                deviceType: 'Unknown',
                                os: 'Unknown'
                            }
                        }
                    }
                })
            } else {
                res.status(401).json({ error: 'Custom slug already exists, please use a different one!' })
            }
        } else {
            const rndSlug = nanoid(8);

            const urlSlug = await prisma.url.findUnique({
                where: {
                    slug: rndSlug,
                }
            })
            if (!urlSlug) {
                const newUrl = await prisma.url.create({
                    data: {
                        userId,
                        url,
                        slug: rndSlug,
                        isCustomSlug: false,
                        active: true,
                        deleted: false,
                        visits: {
                            create: {
                                userAgent: 'Unknown',
                                ipAddress: '127.0.0.1',
                                deviceType: 'Unknown',
                                os: 'Unknown'
                            }
                        }
                    }
                })
            } else {
                res.status(401).json({ error: 'An error has occured, please try again!' })
            }

        }


        return newUrl
    }

}