import Link from "next/link";
import React, { useState, useEffect } from 'react'

//TODO:
//1. Charts 
export default function Analytics({ children, urls }) {

    const [isLoading, setIsLoading] = useState(false);
    const [expandedRowIndex, setExpandedRowIndex] = useState(null);

    const [links, setLinks] = useState([]);
    // const [links, setLinks] = useState([{
    //     id: "kljAlk4",
    //     name: "Google",
    //     description: "Link to google",
    //     shortUrl: "http://google.com/",
    //     totalVisits: 12,
    //     details: "More info here"
    // }, {
    //     id: "kagsAlk4",
    //     name: "Yahoo",
    //     description: "Link to yahoo",
    //     shortUrl: "http://yahoo.com/",
    //     totalVisits: 15,
    //     details: "More info here"
    // }]);

    // useEffect(async () => {
    //     const userUrls = await prisma.url.findMany({
    //         where: {
    //             userId: userId,
    //         },
    //     });
    //     setLinks(userUrls);
    // })

    return (
        <>
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 my-16">
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Original URL
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Short URL
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Created
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Valid
                                                </th>
                                                <th scope="col" className="relative px-6 py-3">
                                                    <span className="sr-only">Edit/Delete</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {urls.map((link, index) => (
                                                <React.Fragment key={link.id}>
                                                    <tr className="bg-white hover:bg-gray-200">
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm font-medium text-gray-900">{link.url}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">http://localhost:3000/{link.slug}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap cursor-pointer">
                                                            <div className="text-sm text-blue-500">{link.createdAt}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="text-sm text-gray-500">{link.validUntil}</div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button
                                                                className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded"
                                                                onClick={() => console.log(`Editing link with id ${link.id}`)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <span className="mx-2 text-gray-400">|</span>
                                                            <button
                                                                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded"
                                                                onClick={() => console.log(`Deleting link with id ${link.id}`)}
                                                            >
                                                                Delete
                                                            </button>
                                                            <span className="mx-2 text-gray-400">|</span>
                                                            <button
                                                                className={`${expandedRowIndex === index
                                                                    ? "bg-gray-500 text-white"
                                                                    : "bg-blue-500 text-white"
                                                                    } hover:bg-blue-600 font-bold px-4 py-2 rounded`}
                                                                onClick={() =>
                                                                    setExpandedRowIndex(expandedRowIndex === index ? null : index)
                                                                }
                                                            >
                                                                {expandedRowIndex === index ? "Hide" : "Details"}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    {index === expandedRowIndex && (
                                                        <tr>
                                                            <td colSpan="5"> {/* makes the column spread to all 5 parent columns */}
                                                                <div className="px-6 py-4 text-sm text-gray-500">{link.details}</div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


