import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 100, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, pause]);

  return displayText;
};

export default useTypewriter;
