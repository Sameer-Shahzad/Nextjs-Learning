import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <div className="max-w-md text-center p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-9xl font-extrabold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="mb-6">
          Could not find the requested resource. It seems you've hit a dead end!
        </p>
        <Link href="/" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          Return Home
        </Link>
      </div>
    </div>
  );
}
