import { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from './Dashboard/DashboardLayout';
import ShortenUrl from './Dashboard/ShortenUrl';
const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('Dashboard');
    return (
        <>
            <DashboardLayout />
            <ShortenUrl />
        </>
    );
};

export default Dashboard;
