import Analytics from "../../components/Dashboard/Analytics"
import DashboardLayout from "../../components/Dashboard/DashboardLayout"
import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();


export default function AnalyticsPage({ userUrls }) {
    return (
        <>
            <DashboardLayout />
            <Analytics urls={userUrls} />
        </>
    )
}

export async function getServerSideProps(context) {
    
    const session = await getSession(context);
    const userId = session.user.id;
    try {
        let userUrls = await prisma.url.findMany({
            where: {
                userId: userId,
            },
            include: { visits: true },
        });

        await prisma.$disconnect();

        userUrls = userUrls.map((url) => ({
            ...url,
            createdAt: url.createdAt ? url.createdAt.toISOString() : "",
            updatedAt: url.updatedAt ? url.updatedAt.toISOString() : "",
            validUntil: url.validUntil ? url.validUntil.toISOString() : ""
          }));
        // userUrls.visits = userUrls.visits.map((visit) => ({
        //     ...visit,
        //     createdAt: visit.createdAt ? visit.createdAt.toISOString() : "",
        // }));

        userUrls.forEach(url => {
            url.visits.forEach((visit) => {
                visit.createdAt = visit.createdAt ? visit.createdAt.toISOString() : ""
            })
        });
        // console.log(userUrls);
        return {
            props: {
                userUrls,
            },
        };
    } catch (error) {
        console.error('Error fetching URLs for user:', error);
        return {
            notFound: true,
        };
    }
}