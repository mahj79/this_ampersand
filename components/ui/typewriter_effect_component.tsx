import React from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';

export const TypewriterEffect = ({
  words,
  loop,
  cursor,
  cursorStyle,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
  onLoopDone,
  onType,
}: {
  words: string[];
  loop?: number;
  cursor?: boolean;
  cursorStyle?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
  onLoopDone?: () => void;
  onType?: (count: number) => void;
}) => {
  return (
    <div className='App'>
      <Typewriter
        words={words}
        loop={loop}
        cursor={cursor}
        cursorStyle={cursorStyle}
        typeSpeed={typeSpeed}
        deleteSpeed={deleteSpeed}
        delaySpeed={delaySpeed}
        onLoopDone={onLoopDone}
        onType={onType}
      />
    </div>
  );
};
