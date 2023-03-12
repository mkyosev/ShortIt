import { useState } from 'react';
import Link from 'next/link';
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
        <div className="flex flex-col w-64 h-screen bg-gray-900">
            <div className="flex items-center justify-center h-16 px-4 border-b border-gray-900">
                <span className="text-xl font-medium text-white">Dashboard</span>
            </div>

            <div className="flex flex-col flex-grow p-4">
                <Link legacyBehavior href="/admin/dashboard">
                    <a className="flex items-center p-2 my-2 transition-all duration-300 rounded-lg hover:bg-gray-700 text-white">
                        <span className="mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"></path>
                            </svg>
                        </span>
                        Shorted Links
                    </a>
                </Link>
                <Link legacyBehavior href="/admin/dashboard">
                    <a className="flex items-center p-2 my-2 transition-all duration-300 rounded-lg hover:bg-gray-700 text-white">
                        <span className="mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path>
                            </svg>
                        </span>
                        Statistics
                    </a>
                </Link>

                <Link legacyBehavior href="/admin/dashboard">
                    <a className="flex items-center p-2 my-2 transition-all duration-300 rounded-lg hover:bg-gray-700 text-white">
                        <span className="mr-4">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </span>
                        Account
                    </a>
                </Link>
                <Link legacyBehavior href="/admin/dashboard">
                    <a className="flex items-center p-2 my-2 transition-all duration-300 rounded-lg hover:bg-gray-700 text-white">
                        <span className="mr-4">
                            <svg  className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                        </span>
                        Settings
                    </a>
                </Link>
            </div>

            <div className="w-3/4">{renderPageContent()}</div>
        </div>
    );
};

export default Dashboard;
