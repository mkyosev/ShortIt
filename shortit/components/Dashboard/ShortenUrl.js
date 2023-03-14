import Link from "next/link";
import { useState } from 'react'

export default function ShortenUrl({ children }) {
    const [url, setUrl] = useState('');
    const [customSlug, setCustomSlug] = useState('');
    const [isCustom, setIsCustom] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Submitting form...', { url, customSlug, isCustom });
    // };

    const handleCustomSlugChange = (event) => {
        setCustomSlug(event.target.value);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    const handleIsCustomChange = (event) => {
        setIsCustom(event.target.checked);
    };

    const [originalUrl, setOriginalUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("http://example.com");
    const [shortenedUrl, setShortenedUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [links, setLinks] = useState([{
        id: "kljAlk4",
        name: "Google",
        description: "Link to google",
        url: "http://google.com/"
    }, {
        id: "kagsAlk4",
        name: "Yahoo",
        description: "Link to yahoo",
        shortUrl: "http://yahoo.com/",
        totalVisits: 15
    }]);

    const handleOriginalUrlChange = (event) => {
        setOriginalUrl(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            // const response = await axios.post("/api/shorten", { url: originalUrl });

            setShortenedUrl('http://goog/asd.com');
        } catch (error) {
            console.error(error);
        }

        setIsLoading(false);
    };

    const copyToClipboard = async (event) => {
        event.preventDefault();

    };

    return (
        <>
            <div className="p-4 sm:ml-64 h-screen">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 my-16">

                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                        <div className="mb-6">
                            <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
                                URL
                            </label>
                            <input
                                type="text"
                                name="url"
                                value={url}
                                onChange={handleUrlChange}
                                placeholder="https://www.example.com"
                                className="bg-gray-100 border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="isCustom"
                                    checked={isCustom}
                                    onChange={handleIsCustomChange}
                                    className="form-checkbox h-4 w-4 text-blue-500"
                                />
                                <label htmlFor="isCustom" className="ml-2 block text-gray-700 font-bold">
                                    Use custom slug
                                </label>
                            </div>
                            {isCustom && (
                                <input
                                    type="text"
                                    name="customSlug"
                                    value={customSlug}
                                    onChange={handleCustomSlugChange}
                                    placeholder="Enter custom slug"
                                    className="mt-2 bg-gray-100 border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-blue-500"
                                />
                            )}
                        </div>

                        <div className="mb-6">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Shorten URL
                            </button>
                        </div>

                        {shortUrl && (
                            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                                <label htmlFor="shortUrl" className="block text-gray-700 font-bold mb-2">
                                    Your URL
                                </label>
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        name="shortUrl"
                                        value={shortUrl}
                                        className="bg-gray-200 border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-blue-500"
                                        readOnly
                                    />
                                    <button
                                        type="button"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={copyToClipboard}
                                    >
                                        Copy
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>

                </div>
            </div>
        </>
    );
}


