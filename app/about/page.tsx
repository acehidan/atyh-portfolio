import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="py-8 min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-light text-gray-800 dark:text-white mb-8">About</h2>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">Background</h3>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a seasoned software developer with over 10 years of experience building robust backend systems. My
                journey in tech began with a Computer Science degree, followed by roles at startups and enterprise
                companies where I've honed my skills in designing scalable architectures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">Skills</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Backend Development (Node.js, TypeScript, Python)</li>
                <li>Database Design (SQL, NoSQL, Graph Databases)</li>
                <li>Cloud Architecture (AWS, Azure, GCP)</li>
                <li>Blockchain Development (Ethereum, Solidity)</li>
                <li>API Design (REST, GraphQL)</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-3 text-gray-800 dark:text-white">Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">Principal Software Developer</h4>
                  <p className="text-gray-500 dark:text-gray-400">TechCorp Inc. • 2020 - Present</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Leading backend development for distributed systems, implementing event-driven architecture, and
                    mentoring junior developers.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-medium text-gray-700 dark:text-gray-200">Senior Developer</h4>
                  <p className="text-gray-500 dark:text-gray-400">InnovateSoft • 2016 - 2020</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Designed and implemented scalable APIs, optimized database performance, and led the migration to a
                    microservices architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
