import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 fixed bottom-0 w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link legacyBehavior href="/">
                            <a className="text-white font-bold text-xl">ShortIt</a>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link href="/about" passHref legacyBehavior>
                            <a className="text-gray-400 hover:text-white ml-4">
                                About
                            </a>
                        </Link>
                        <Link href="/contact" passHref legacyBehavior>
                            <a className="text-gray-400 hover:text-white ml-4">
                                Contact
                            </a>
                        </Link>
                        <Link href="/privacy" passHref legacyBehavior>
                            <a className="text-gray-400 hover:text-white ml-4">
                                Privacy Policy
                            </a>
                        </Link>
                        <Link href="/tos" passHref legacyBehavior>
                            <a className="text-gray-400 hover:text-white ml-4">
                                Terms of Service
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
