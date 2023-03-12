import Link from "next/link"
export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:py-16 lg:px-8">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Shorten your URLs with ease
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Our simple and intuitive URL shortener helps you shorten your long
              and complex URLs into shorter and more manageable links.
            </p>
            <div className="mt-10">
              <Link legacyBehavior href="/shorten">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Get started
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-gray-900">Why Choose Us?</h3>
          <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="check-circle w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-medium text-gray-900">Easy to Use</h4>
                <p className="mt-2 text-base text-gray-500">
                  Our URL shortener is simple and easy to use, with an intuitive interface that allows you to shorten your URLs in seconds.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="shield-check w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-medium text-gray-900">Secure</h4>
                <p className="mt-2 text-base text-gray-500">
                  Our URL shortener uses state-of-the-art security measures to ensure that your data is always safe and secure.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="shield-check w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-medium text-gray-900">Customazible</h4>
                <p className="mt-2 text-base text-gray-500">
                  Create custom branded links with ease and manage their statistics from our advanced dashboard.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
