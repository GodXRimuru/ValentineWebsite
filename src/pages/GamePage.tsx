import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playSound } from '../utils/audio';

interface GamePageProps {
  onNext: () => void;
}

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['💖', '💖', '🌹', '🌹', '⭐', '⭐', '💝', '💝', '🦋', '🦋', '✨', '✨'];

const shuffleArray = (array: string[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const GamePage = ({ onNext }: GamePageProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(emojis);
    setCards(
      shuffled.map((emoji, index) => ({
        id: index,
        emoji,
        isFlipped: false,
        isMatched: false,
      }))
    );
  }, []);

  useEffect(() => {
    if (flippedIndices.length === 2) {
      const [first, second] = flippedIndices;
      if (cards[first].emoji === cards[second].emoji) {
        playSound.ding();
        setTimeout(() => {
          setCards(prev =>
            prev.map((card, idx) =>
              idx === first || idx === second ? { ...card, isMatched: true } : card
            )
          );
          setFlippedIndices([]);
        }, 600);
      } else {
        playSound.error();
        setTimeout(() => {
          setCards(prev =>
            prev.map((card, idx) =>
              idx === first || idx === second ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedIndices([]);
        }, 1000);
      }
    }
  }, [flippedIndices, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setIsWon(true);
      playSound.cheer();
      setTimeout(() => onNext(), 2000);
    }
  }, [cards, onNext]);

  const handleCardClick = (index: number) => {
    if (
      flippedIndices.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched ||
      flippedIndices.includes(index)
    ) {
      return;
    }

    playSound.flip();
    setCards(prev =>
      prev.map((card, idx) => (idx === index ? { ...card, isFlipped: true } : card))
    );
    setFlippedIndices(prev => [...prev, index]);

    if (flippedIndices.length === 1) {
      setMoves(m => m + 1);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-4"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-card p-8 max-w-2xl w-full"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
          Let's play a little game
        </h2>
        <p className="text-center text-pink-700 mb-4">
          Tap two cards to find the matching pairs!
        </p>
        <div className="text-center text-pink-600 font-semibold mb-6">
          Moves: {moves}
        </div>

        <div className="grid grid-cols-4 gap-3 md:gap-4 max-w-md mx-auto">
          <AnimatePresence>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: card.isFlipped || card.isMatched ? 180 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="aspect-square cursor-pointer"
                onClick={() => handleCardClick(index)}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative w-full h-full">
                  {/* Card back */}
                  <div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-4xl shadow-lg"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg)',
                    }}
                  >
                    ?
                  </div>
                  {/* Card front */}
                  <div
                    className="absolute inset-0 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center text-4xl shadow-lg border-2 border-pink-300"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    {card.emoji}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {isWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center mt-6 text-2xl font-bold text-pink-600"
            >
              Yay! You found all the pairs! 🎉
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
