import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const FAQItem = ({ question, answer, isOpen, onClick, className }: FAQItemProps) => {
  return (
    <div className={className || "border border-border/50 rounded-2xl overflow-hidden bg-white shadow-sm transition-colors duration-200 hover:border-brand/50 relative z-10"}>
      <button
        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-foreground">{question}</span>
        <span className={`shrink-0 transition-transform duration-200 transform ${isOpen ? 'rotate-180' : ''} text-brand`}>
            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQList = ({ items, itemClassName }: { items: { question: string; answer: string }[]; itemClassName?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FAQItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
          className={itemClassName}
        />
      ))}
    </div>
  );
};
