import { useState } from 'react';
import Link from 'next/link';
import DashboardLayout from './Dashboard/DashboardLayout';
import ShortenUrl from './Dashboard/ShortenUrl';
const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const menuItems = [
        'Dashboard',
        'Users',
        'Settings',
        'Reports',
        'Logs',
        'Help',
    ];

    const handleMenuItemClick = (page) => {
        setCurrentPage(page);
    };

    const renderPageContent = () => {
        switch (currentPage) {
            case 'Dashboard':
                return (
                    <div>
                        <h1>Dashboard</h1>
                        <p>Welcome to the dashboard!</p>
                    </div>
                );
            case 'Users':
                return (
                    <div>
                        <h1>Users</h1>
                        <p>List of users goes here.</p>
                    </div>
                );
            case 'Settings':
                return (
                    <div>
                        <h1>Settings</h1>
                        <p>Configure settings here.</p>
                    </div>
                );
            case 'Reports':
                return (
                    <div>
                        <h1>Reports</h1>
                        <p>View reports here.</p>
                    </div>
                );
            case 'Logs':
                return (
                    <div>
                        <h1>Logs</h1>
                        <p>View logs here.</p>
                    </div>
                );
            case 'Help':
                return (
                    <div>
                        <h1>Help</h1>
                        <p>Get help here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        // <div className="flex h-screen">
        //   <div className="w-1/4 bg-gray-200">
        //     <ul className="flex flex-col h-full">
        //       {menuItems.map((item) => (
        //         <li
        //           key={item}
        //           className={`px-4 py-2 cursor-pointer ${
        //             currentPage === item && 'bg-gray-400'
        //           }`}
        //           onClick={() => handleMenuItemClick(item)}
        //         >
        //           {item}
        //         </li>
        //       ))}
        //     </ul>
        //   </div>
        //   <div className="w-3/4">{renderPageContent()}</div>
        // </div>
        <>
            <DashboardLayout />
            <ShortenUrl />
        </>
    );
};

export default Dashboard;
