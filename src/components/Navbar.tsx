
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Sun, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="text-2xl font-bold text-blue-400 tracking-wider">
          NoteAura
        </a>
        
        {!isMobile && (
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </div>
        )}
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <Sun size={20} className="text-yellow-300" />
          </button>
          
          {isMobile ? (
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
                  <Menu size={24} className="text-white" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900/95 backdrop-blur-md border-gray-800 text-white pt-16">
                <div className="flex flex-col space-y-6 mt-4">
                  <MobileNavLink href="#home">Home</MobileNavLink>
                  <MobileNavLink href="#features">Features</MobileNavLink>
                  <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
                  <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                  <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                  <MobileNavLink href="#faq">FAQ</MobileNavLink>
                  <div className="pt-4 border-t border-gray-800">
                    <a
                      href="https://note-aura-seven.vercel.app/dashboard"
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 text-center font-medium"
                    >
                      Start Free Trial
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <a
              href="https://note-aura-seven.vercel.app/dashboard"
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Start Free Trial
            </a>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white text-lg font-medium transition-colors duration-300 px-2 py-1"
  >
    {children}
  </a>
);

export default Navbar;
