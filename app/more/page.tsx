import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"

export default function MorePage() {
  return (
    <PageTransition>
      <section className="py-8 min-h-[calc(100vh-180px)]">
        <h2 className="text-4xl font-light text-gray-800 dark:text-white mb-8">More</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-2xl font-medium mb-6 text-gray-800 dark:text-white">Get in Touch</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Additional Links */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-white">Speaking Engagements</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I regularly speak at tech conferences about backend development, blockchain, and software architecture.
              </p>
              <Button variant="outline" className="w-full">
                View Upcoming Events
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-white">Open Source</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check out my contributions to open source projects and libraries I've created.
              </p>
              <Button variant="outline" className="w-full">
                View GitHub Projects
              </Button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-2xl font-medium mb-4 text-gray-800 dark:text-white">Newsletter</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to my newsletter for weekly insights on software development and tech trends.
              </p>
              <Button variant="outline" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
