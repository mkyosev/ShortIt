import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold mb-6 flex items-center">
                404
            </h1>
            <p className="text-xl mb-6">We couldn't find the page you were looking for.</p>
            <Link href="/" passHref legacyBehavior>
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go back</a>
            </Link>
        </div>
    );
};

export default Custom404;