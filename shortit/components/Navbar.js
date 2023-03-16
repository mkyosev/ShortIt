import Link from "next/link"
import { useSession, signOut } from "next-auth/react";
const Navbar = () => {

    let { data: session } = useSession();

    return (
        <nav className="bg-gray-900 fixed w-full">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    {/* Navbar brand */}
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link legacyBehavior href="/">
                            <a className="text-white font-bold text-xl">ShortIt</a>
                        </Link>
                    </div>

                    {/* Navbar links */}
                    <div className="flex-shrink-0">
                        <div className="flex space-x-4">
                            <Link legacyBehavior href="/about">
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </a>
                            </Link>
                            <Link legacyBehavior href="/contact">
                                <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </a>
                            </Link>



                            {session ?
                                <>
                                    <Link legacyBehavior href="/dashboard">
                                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Dashboard
                                        </a>
                                    </Link>
                                    <Link legacyBehavior href="#">
                                        <a onClick={() => signOut({ callbackUrl: '/' })} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Logout
                                        </a>
                                    </Link>
                                </>
                                :
                                <>
                                    <Link legacyBehavior href="/login">
                                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Login
                                        </a>
                                    </Link>
                                    <Link legacyBehavior href="/register">
                                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                            Register
                                        </a>
                                    </Link>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
