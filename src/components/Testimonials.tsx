import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Williams",
    role: "University Professor",
    avatar: "S",
    avatarColor: "bg-purple-500",
    rating: 5,
    text: '"As an educator, I\'ve tried many note-taking tools, but NoteAura stands out with its AI capabilities. I can quickly generate quizzes for my students and share study materials with them. The PDF integration is a game-changer for academic papers."',
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Entrepreneur",
    avatar: "M",
    avatarColor: "bg-green-500",
    rating: 5,
    text: '"NoteAura has been essential for my business research. The ability to upload PDFs, get insights, and share notes with my team has streamlined our research process. The multi-device sync ensures I can access my notes anywhere."',
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Entrepreneur",
    avatar: "M",
    avatarColor: "bg-green-500",
    rating: 5,
    text: '"NoteAura has been essential for my business research. The ability to upload PDFs, get insights, and share notes with my team has streamlined our research process. The multi-device sync ensures I can access my notes anywhere."',
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Entrepreneur",
    avatar: "M",
    avatarColor: "bg-green-500",
    rating: 5,
    text: '"NoteAura has been essential for my business research. The ability to upload PDFs, get insights, and share notes with my team has streamlined our research process. The multi-device sync ensures I can access my notes anywhere."',
  },
];

const Rating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Star className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div className="relative bg-gray-900 border border-gray-700 rounded-2xl p-6 h-full transition-all duration-300 shadow-lg overflow-hidden">
    <Rating rating={testimonial.rating} />
    <p className="text-gray-300 mb-6 text-sm leading-relaxed font-light">{testimonial.text}</p>
    <div className="flex items-center gap-3">
      <Avatar className={`${testimonial.avatarColor} h-12 w-12 ring-2 ring-white/10`}>
        <AvatarFallback className="text-white font-medium">{testimonial.avatar}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-semibold text-white text-base">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm font-light">{testimonial.role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400; // Adjust scroll amount
      containerRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-white text-center mb-6">Trusted by Learners Worldwide</h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto">Discover how NoteAura empowers students and professionals.</p>
        </motion.div>

        <div className="relative mt-10">
          <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full shadow-lg z-10">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div ref={containerRef} className="flex overflow-x-auto gap-6 py-6 scrollbar-hide">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-shrink-0 w-[320px]">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full shadow-lg z-10">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
