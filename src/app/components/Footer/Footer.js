import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-zomp">
          <Link 
            href="mailto:contact@jadach.dev" 
            className="hover:text-carrot-orange transition-colors duration-300 font-semibold"
          >
            contact@jadach.dev
          </Link>
          <p className="text-sm text-seasalt">
            &copy; {currentYear} Jadach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

