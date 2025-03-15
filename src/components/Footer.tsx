import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-950 text-white pt-16 pb-10">
      <div className="container mx-auto px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">NoteAura</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your note-taking experience with AI-powered tools that help you organize, summarize, and learn more effectively.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Security & Trust */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Security & Trust</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <p className="text-sm">End-to-end encrypted & secure.</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 mt-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <p className="text-sm">99.9% uptime guarantee.</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to get the latest updates and insights.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:ring focus:ring-blue-500 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </form>
            {isSubmitted && (
              <motion.p
                className="text-green-400 text-sm mt-2 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CheckCircle className="w-4 h-4 mr-1" />
                Subscribed successfully!
              </motion.p>
            )}
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646A4.118 4.118 0 0019.5 4.5a8.224 8.224 0 01-2.605.996A4.107 4.107 0 0010 9.92c0 .322.038.637.106.94A11.65 11.65 0 012 4.5a4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NoteAura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
