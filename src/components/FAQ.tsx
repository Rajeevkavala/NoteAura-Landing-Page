import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How does AI-powered NoteAura work?",
    answer: "NoteAura uses advanced AI algorithms to analyze your notes, PDFs, and other learning materials. It can generate summaries, extract key concepts, create practice questions, and help you organize your content efficiently. The more you use it, the better it adapts to your learning style."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We take data privacy extremely seriously. All your notes and personal information are encrypted and stored securely. We never share your data with third parties, and you maintain full ownership of all your content."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. If you're on a paid plan, you'll continue to have access until the end of your billing period. We also offer a 7-day money-back guarantee for new Pro subscriptions."
  },
  {
    question: "How do I share notes with teammates or students?",
    answer: "Sharing is simple. Just select the notes you want to share, click the 'Share' button, and enter the email addresses of your teammates or students. You can set specific permissions for viewing or editing, and track all shared content from your dashboard."
  },
  {
    question: "What file formats are supported for upload?",
    answer: "NoteAura supports a wide range of formats including PDF, DOCX, TXT, RTF, and images (JPG, PNG). Our OCR technology can extract text from images and PDFs, making it easy to work with various types of learning materials."
  },
  {
    question: "Is NoteAura available on mobile devices?",
    answer: "Yes! NoteAura is fully optimized for mobile use. We have native apps for iOS and Android, plus a responsive web application that works great on all devices. Your notes sync automatically across all your devices."
  }
];

const FAQ = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Animation variants for smoother transitions
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-gray-900 py-24 text-white" id="faq">
      <div className="container mx-auto px-6 md:px-8">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about NoteAura and how it works.
          </p>
        </motion.div>

        {/* Improved Accordion */}
        <div className="max-w-4xl mx-auto shadow-2xl rounded-xl overflow-hidden">
          <Accordion type="single" collapsible className="space-y-2 bg-gray-900/50 backdrop-blur-sm">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border-b border-gray-800/50 last:border-b-0 bg-gray-900/30 transition-all duration-300"
                >
                  <AccordionTrigger 
                    className="px-6 py-5 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180 group"
                  >
                    <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-gray-300 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Still have questions?
          </h3>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;