import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LetterPageProps {
  onNext?: () => void;
}

const letterText = `Happy Valentine's Day to the person who owns my heart, even from miles apart.

I know you've been really busy lately with your studies, and maybe a bit tired or overwhelmed, but I just want you to know how proud I am of you.

You've been giving your best, even when things get tough, and that's one of the many reasons I love you so much.

On your special day, I hope you take a little break and remember that you're so loved not just by the people around you, but especially by me.

I wish I could be there to hug you, to celebrate with you, and to see your smile and hear your voice.

Even though distance keeps us apart, my heart never left your side.

You're my peace, my favorite person, and the one I always root for.

I hope this message makes you feel how much I love and miss you.

Happy Valentine's Day, my love

I love you forever, my baby 💕`;

export const LetterPage = ({ onNext }: LetterPageProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < letterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + letterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Typing speed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 py-12"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative glass-card p-10 md:p-12 max-w-3xl w-full border-4 border-pink-300"
      >
        {/* Corner decorations */}
        <div className="absolute top-4 left-4 w-4 h-4 rounded-full bg-pink-400"></div>
        <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-pink-400"></div>
        <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-pink-400"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-pink-400"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none"
        >
          <div className="text-pink-900 leading-relaxed whitespace-pre-line font-poppins">
            {displayedText}
            {currentIndex < letterText.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-pink-500 ml-1"
              />
            )}
          </div>
        </motion.div>

        {currentIndex >= letterText.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="btn-primary px-8 py-3"
            >
              Read Again 💕
            </motion.button>
          </motion.div>
        )}

        {/* Floating hearts around the letter */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-30"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
