import { PageTransition } from "@/components/page-transition"

export default function BlogPage() {
  return (
    <PageTransition>
      <section className="py-8 min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-light text-gray-800 dark:text-white mb-8">Blog</h2>

        <div className="space-y-8">
          {/* Blog Post */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2 text-gray-800 dark:text-white">
                Understanding Event-Driven Architecture
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">April 15, 2025 • 8 min read</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Event-driven architecture is a software design pattern in which decoupled applications can
                asynchronously publish and subscribe to events via an event broker...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Architecture
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Backend
                </span>
              </div>
              <button className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white">
                Read more →
              </button>
            </div>
          </div>

          {/* Blog Post */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2 text-gray-800 dark:text-white">
                The Future of Blockchain in Enterprise Applications
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">March 22, 2025 • 12 min read</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Blockchain technology has evolved beyond cryptocurrencies and is now finding practical applications in
                enterprise environments. This article explores how companies are leveraging...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Blockchain
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Enterprise
                </span>
              </div>
              <button className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white">
                Read more →
              </button>
            </div>
          </div>

          {/* Blog Post */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-2xl font-medium mb-2 text-gray-800 dark:text-white">
                Optimizing NoSQL Database Performance
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">February 8, 2025 • 10 min read</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                NoSQL databases offer flexibility and scalability, but they come with their own performance challenges.
                In this article, I share techniques I've used to optimize...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Database
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  Performance
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  NoSQL
                </span>
              </div>
              <button className="text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
