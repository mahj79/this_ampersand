"use client";

import React from 'react';
import { TypewriterEffect as TypewriterEffectComponent } from '../../components/ui/typewriter_effect_component';

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
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      onLoopDone={handleDone}
      onType={handleType}
    />
  );
}

