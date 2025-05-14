import { PageTransition } from "@/components/page-transition"

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="py-8 min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-light text-gray-800 dark:text-white mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-2 dark:text-white">Project Name - 2025-02</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of this project and the technologies used to build it.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Node.js
              </span>
            </div>
          </div>

          {/* More Project Cards */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-2 dark:text-white">Project Name - 2024-11</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of this project and the technologies used to build it.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Blockchain
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Solidity
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Web3
              </span>
            </div>
          </div>

          {/* Third Project Card */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
            <h3 className="text-xl font-medium mb-2 dark:text-white">Project Name - 2024-08</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A brief description of this project and the technologies used to build it.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                API
              </span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
