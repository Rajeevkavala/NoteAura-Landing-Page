import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Best for getting started with AI-powered notes.",
    features: [
      { text: "Upload up to 5 PDFs per month", included: true },
      { text: "Basic AI-powered note generation", included: true },
      { text: "Community support", included: true },
      { text: "Access to help center", included: true },
      { text: "Advanced AI summarization & MCQs", included: false },
      { text: "Priority email & chat support", included: false },
      { text: "Early access to new features", included: false },
      { text: "Unlimited PDF uploads", included: false },
    ],
    buttonText: "Start for Free",
    buttonVariant: "outline" as const,
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: "₹299",
    yearlyPrice: "₹2,999",
    monthlyPeriod: "/month",
    yearlyPeriod: "/year",
    description: "Ideal for students & professionals needing advanced AI tools.",
    features: [
      { text: "Unlimited PDF uploads", included: true },
      { text: "AI-powered note generation, Summaries & MCQs", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Early access to new features", included: true },
      { text: "Community support", included: true },
      { text: "Access to help center", included: true },
    ],
    buttonText: "Upgrade to Pro",
    buttonVariant: "default" as const,
    highlighted: true,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-gray-950 to-gray-900 py-24 text-white" id="pricing">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Flexible Pricing for Every Learner
          </motion.h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs, with no commitments or hidden fees.
          </p>
          <div className="mt-6 flex justify-center gap-4 items-center">
            <span className={cn("text-sm", !isAnnual && "text-gray-300")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-gray-800 rounded-full p-1 relative transition-colors duration-300"
            >
              <motion.div 
                className="w-5 h-5 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
            <span className={cn("text-sm", isAnnual && "text-gray-300")}>Annual (Save ~17%)</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border bg-gray-900/80 backdrop-blur-sm p-8 flex flex-col h-full relative overflow-hidden shadow-xl",
                plan.highlighted 
                  ? "border-purple-500/50 bg-gradient-to-br from-gray-900 to-purple-900/10" 
                  : "border-gray-800/50"
              )}
            >
              {plan.highlighted && (
                <motion.span 
                  className="absolute -top-12 -right-12 w-24 h-24 bg-purple-500/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold tracking-tight">
                      {plan.name === "Free" 
                        ? plan.price 
                        : (isAnnual ? plan.yearlyPrice : plan.monthlyPrice)}
                    </span>
                    <span className="text-gray-400 text-base">
                      {plan.name === "Free" 
                        ? plan.period 
                        : (isAnnual ? plan.yearlyPeriod : plan.monthlyPeriod)}
                    </span>
                  </div>
                  {plan.name === "Pro" && isAnnual && (
                    <p className="text-green-400 text-sm mt-2">Save ₹589 compared to monthly</p>
                  )}
                  <p className="text-gray-400 mt-3">{plan.description}</p>
                </div>

                <div className="space-y-5 mb-10 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0",
                        feature.included ? "bg-green-500/10" : "bg-gray-800"
                      )}>
                        {feature.included ? (
                          <Check className="h-4 w-4 text-green-400" />
                        ) : (
                          <X className="h-4 w-4 text-gray-600" />
                        )}
                      </div>
                      <span className={cn("text-sm", feature.included ? "text-gray-200" : "text-gray-500")}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.buttonVariant} 
                  className={cn(
                    "w-full py-6 text-base font-medium transition-all duration-300",
                    plan.highlighted 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                      : "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  )}
                >
                  {plan.buttonText}
                </Button>
                
                <p className="text-xs text-gray-400 text-center mt-4">
                  {plan.highlighted ? "7-day money back guarantee" : "No credit card required"}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="rounded-2xl border border-gray-800/50 bg-gray-900/80 backdrop-blur-sm p-8 text-center shadow-xl">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Solutions</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Custom pricing and features tailored to your organization's needs.
            </p>
            <Button 
              variant="outline" 
              className="bg-transparent border-purple-500 text-purple-400 hover:bg-purple-500/10 py-6 px-8 text-base"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-gray-400 hover:text-purple-400 text-base">
            Have Questions? Check our FAQs →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;