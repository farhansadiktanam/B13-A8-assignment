import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for doesn’t exist.
      </p>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          Go Home
        </button>
      </Link>
    </div>
  );
}
