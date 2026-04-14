import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-extrabold text-emerald-900 dark:text-emerald-400">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          Looks like this friendship link is broken. The page you’re looking for
          doesn’t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg 
          bg-emerald-900 text-white dark:bg-emerald-500 dark:text-gray-900 
          hover:opacity-90 transition"
        >
          <RiHome2Line />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
