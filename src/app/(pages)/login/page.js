import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col gap-y-5 justify-center items-center min-h-screen bg-white px-5">
      <div className="shadow w-full max-w-md p-3 flex justify-center bg-gray-50">
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
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-50 shadow">
        <h2 className="text-left text-2xl font-bold text-blacl">
          <span
            className="border-b-4 border-purple-500"
            style={{ textDecoration: "none" }}
          >
            L
          </span>
          <span
            className="border-b-4 border-purple-500"
            style={{ textDecoration: "none" }}
          >
            o
          </span>
          gin
        </h2>

        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 mt-8"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300"
            type="password"
            placeholder="Confirm password"
          />

          <div className="flex justify-between items-center">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-sm font-semibold">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-sm hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-purple-500 text-white hover:font-semibold hover:bg-black transition-transform duration-200 transform hover:scale-105"
          >
            Login Now
          </button>
        </form>

        <p className="text-center text-sm font-semibold">
          Don’t have an account?{" "}
          <Link href="/register" className="text-purple-500 hover:underline">
            Sign Up Now
          </Link>
        </p>
      </div>
    </div>
  );
}
