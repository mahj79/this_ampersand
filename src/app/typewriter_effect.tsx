"use client";

import React from 'react';
import { TypewriterEffect as TypewriterEffectComponent } from '../../components/ui/typewriter_effect_component';

/*
interface WordWithImage {
  text: string;
  image: string; // URL or path to the image
}

const wordsWithImages: WordWithImage[] = [
  { text: 'Eat', image: '/images/eat.png' },
  { text: 'Sleep', image: '/images/sleep.png' },
  { text: 'Code', image: '/images/code.png' },
  { text: 'Repeat!', image: '/images/repeat.png' },
];

*/


export default function TypewriterEffect() {
  const handleType = (count: number) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log('Done after 5 loops!');
  };

  return (
    <TypewriterEffectComponent
      words={['Chicago', 'Friendship', 'Wine Wednesday', 'Iced Coffee', 'Podcasts']}
      loop={0}
      cursor
      cursorStyle='_'
      typeSpeed={100}
      deleteSpeed={100}
      delaySpeed={2000}
      onLoopDone={handleDone}
      onType={handleType}
    />
  );
}

