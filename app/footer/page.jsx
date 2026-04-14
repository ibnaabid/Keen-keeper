
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          {/* Left Side - Logo & Description */}
          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your personal shelf of meaningful connections. 
              Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-6">Social Links</h3>
            <div className="flex gap-6 justify-center">
              {/* Instagram */}
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-2xl flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4 2.21 0 4 1.791 4 4 0 2.21-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-2xl flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href="#" 
                className="w-12 h-12 bg-white/10 hover:bg-white/20 transition-all rounded-2xl flex items-center justify-center"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25l-7.194 8.5-7.194-8.5h-2.25l9.25 13.5-9.25 10.75h2.25l7.194-8.5 7.194 8.5h2.25l-9.25-13.5 9.25-10.75z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;