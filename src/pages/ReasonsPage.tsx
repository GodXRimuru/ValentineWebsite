import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/audio';

interface ReasonsPageProps {
  onNext: () => void;
}

const reasons = [
  { title: 'Your Dedication', text: 'You never give up, even when things get hard.' },
  { title: 'Your Tenderness', text: 'You make me feel loved every day.' },
  { title: 'Your Humor', text: 'You always make me laugh.' },
  { title: 'Your Beauty', text: "Your soul is the most beautiful thing I've ever known." },
  { title: 'Your Heart', text: 'The way you love is everything I want.' },
  { title: 'Our Future', text: "I can't wait for all our tomorrows together." },
];

export const ReasonsPage = ({ onNext }: ReasonsPageProps) => {
  const [revealed, setRevealed] = useState<number[]>([]);
  const [showButton, setShowButton] = useState(false);

  const handleReveal = (index: number) => {
    if (revealed.includes(index)) return;

    playSound.pop();
    setRevealed(prev => {
      const newRevealed = [...prev, index];
      if (newRevealed.length === reasons.length) {
        setTimeout(() => setShowButton(true), 500);
      }
      return newRevealed;
    });
  };

  const handleNext = () => {
    playSound.ding();
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 py-12"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card p-8 max-w-2xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Reasons Why I Love You
        </h2>
        <p className="text-center text-pink-700 mb-8">
          Tap each heart to reveal one reason 💕
        </p>

        <div className="space-y-4 mb-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-2xl cursor-pointer transition-all ${
                revealed.includes(index)
                  ? 'bg-white/60 backdrop-blur-md border-2 border-pink-300'
                  : 'bg-pink-100/40 backdrop-blur-sm border-2 border-pink-200 hover:border-pink-300'
              }`}
              onClick={() => handleReveal(index)}
              whileHover={{ scale: revealed.includes(index) ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4">
                <motion.span
                  className="text-3xl"
                  animate={{
                    scale: revealed.includes(index) ? [1, 1.3, 1] : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {revealed.includes(index) ? '💖' : '🤍'}
                </motion.span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-pink-800">
                    {reason.title}
                  </h3>
                  <AnimatePresence>
                    {revealed.includes(index) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-pink-700 mt-2"
                      >
                        {reason.text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="btn-primary text-xl px-10 py-4"
              >
                Open Your Letter 💌
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
