import { PrismaClient } from "@prisma/client";
import { getSession } from 'next-auth/react'
import useragent from 'useragent'

const prisma = new PrismaClient();

async function getUrl(req, res) {

    const { slug } = req.body;

    const userAgentString = req.headers['user-agent'];

    try {
        const userAgent = useragent.parse(userAgentString);
        // console.log(req.socket);
        
        const userAgentData = {
            browser: userAgent.family,
            browserVersion: userAgent.toVersion(),
            os: userAgent.os.family,
            osVersion: userAgent.os.toVersion(),
            device: userAgent.device.family,
            deviceType: userAgent.device.type ? userAgent.device.type : "Other",
            ipAddress: req.socket.remoteAddress
            // isMobile: userAgent.device.isMobile(),
        };

        if (slug != undefined) {
            const url = await prisma.url.findUnique({
                where: {
                    slug: slug,
                }
            })


            await prisma.visit.create({
                data: {
                    urlId: url.id,
                    userAgent: userAgentString,
                    browser: userAgentData.browser,
                    os: userAgentData.os,
                    osVersion: userAgentData.osVersion,
                    deviceType: userAgentData.deviceType,
                    ipAddress: userAgentData.ipAddress
                }
            })

            await prisma.$disconnect();

            res.status(200).json(url);
        } else {
            res.status(401).json({ error: 'Short url does not exists' })
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: 'Problem retrieving url' })
    }

}

export default getUrl