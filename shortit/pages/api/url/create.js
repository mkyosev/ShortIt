import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth/react'
import { nanoid } from 'nanoid'

const prisma = new PrismaClient();

async function createUrl(req, res) {

    const session = await getSession({ req })
    const { url, slug, isCustomSlug, validDays } = req.body;

    console.log(url);
    console.log(slug);
    console.log(isCustomSlug);

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
            userId: user.id,
            isCustomSlug: true
        }
    })

    if (user.userLevel == 1 && urls > process.env.MAX_FREE_CUSTOM_URLS && isCustomSlug) {
        res.status(401).json({ error: 'You have reached the maximum amount of free custom links you can create.' })
    }
    else {
        const newUrl = await createUrl(user.id, url, slug, isCustomSlug, validDays);
        // res.status(200).json(newUrl);
    }
    // Check if the URL already exists in the database
    // const existingUrl = await prisma.url.findUnique({
    //     where: {
    //         url: url,
    //     },
    // });


    async function createUrl(userId, url, slug, isCustomSlug, validDays) {

        if (isCustomSlug) {
            const urlSlug = await prisma.url.findUnique({
                where: {
                    slug: slug,
                }
            })
            if (!urlSlug) {
                const now = new Date();
                const twoDaysLater = new Date(now);

                twoDaysLater.setDate(now.getDate() + validDays);

                const newUrl = await prisma.url.create({
                    data: {
                        url,
                        slug: slug,
                        isCustomSlug: true,
                        active: true,
                        deleted: false,
                        validUntil: twoDaysLater,
                        visits: {
                            create: {
                                userAgent: 'Unknown',
                                ipAddress: '127.0.0.1',
                                deviceType: 'Unknown',
                                browser: 'Unknown',
                                os: 'Unknown'
                            }
                        },
                        user: {
                            connect: {
                                id: userId,
                            },
                        },
                    }
                })
                res.status(200).json(newUrl);
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

                const now = new Date();
                const twoDaysLater = new Date(now);

                twoDaysLater.setDate(now.getDate() + validDays);

                const newUrl = await prisma.url.create({
                    data: {
                        url,
                        slug: rndSlug,
                        isCustomSlug: false,
                        active: true,
                        deleted: false,
                        validUntil: twoDaysLater,
                        // visits: {
                        //     create: {
                        //         userAgent: 'Unknown',
                        //         ipAddress: '127.0.0.1',
                        //         deviceType: 'Unknown',
                        //         os: 'Unknown',
                        //         browser: 'Unknown'
                        //     }
                        // },
                        user: {
                            connect: {
                                id: userId,
                            },
                        },
                    }
                })
                res.status(200).json(newUrl);
            } else {
                res.status(401).json({ error: 'An error has occured, please try again!' })
            }

        }


        // return newUrl
    }

}

export default createUrl