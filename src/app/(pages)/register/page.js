import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
    return (
        <div className="flex flex-col gap-y-5 justify-center items-center min-h-screen bg-white">
            <div className="shadow w-full max-w-md p-3 flex justify-center">
                <Link href="/">
                <Image
                    src="/logo.png"
                    width={1000}
                    height={1000}
                    alt="nav logo image"
                    className="w-20 sm:w-32 h-auto"
                />
                </Link>
            </div>
            <div className="w-full max-w-md p-6 space-y-6 bg-black shadow shadow-purple-500">
                <h2 className="text-left text-2xl font-bold text-white mb-4">
                    <span className="border-b-4 border-purple-500" style={{ textDecoration: 'none' }}>R</span>
                    <span className="border-b-4 border-purple-500" style={{ textDecoration: 'none' }}>e</span>
                    gistration
                </h2>

                <form className="space-y-6">
                    <input
                        className="w-full px-4 py-3 border border-gray-300 shadow-md"
                        type="text"
                        placeholder="Enter your name"
                    />
                    <input
                        className="w-full px-4 py-3 border border-gray-300 shadow-md"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className="w-full px-4 py-3 border border-gray-300 shadow-md"
                        type="password"
                        placeholder="Create a password"
                    />
                    <input
                        className="w-full px-4 py-3 border border-gray-300 shadow-md"
                        type="password"
                        placeholder="Confirm password"
                    />

                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-sm font-semibold text-white">
                            <span>I accept the <Link href='#' className='hover:underline'>terms and conditions</Link></span>
                        </span>
                    </label>

                    <div className="mt-5">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-purple-500 text-white hover:font-semibold transition-transform duration-200 transform hover:scale-105"
                        >
                            Register Now
                        </button>
                    </div>
                </form>

                <p className="text-center text-sm font-semibold text-white">
                    Already have an account?{' '}
                    <Link href="/login" className="text-purple-500 hover:underline">
                        Login Now
                    </Link>
                </p>
            </div>
        </div>
    );
}

