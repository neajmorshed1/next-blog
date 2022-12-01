import Link from 'next/link';

export default function Custom404() {
  return (
    <section className="flex h-screen justify-center items-center flex-col">
      <div className="container m-auto px-4">
        <div className="max-w-lg m-auto text-center flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-gray-700">Page Not Found</h2>
          <p className="text-base text-gray-500 font-body">
            The page your are looking for doesn't exist or has been removed.
          </p>
          <div>
            <Link
              href="/"
              className="text-white inline-flex font-medium text-base h-11 px-7 justify-center items-center py-4 bg-blue-700"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
