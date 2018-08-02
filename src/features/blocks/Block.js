import React from 'react';
import { Block1, Block2, Block3, Block4 } from './';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
configureAnchors({ offset: -0, scrollDuration: 800 });

export const Block = () => (
  <div>
    <Block1 />
    <ScrollableAnchor id={'section1'}>
      <Block2 />
    </ScrollableAnchor>
    <ScrollableAnchor id={'section2'}>
      <Block3 />
    </ScrollableAnchor>
    <ScrollableAnchor id={'section3'}>
      <Block4 />
    </ScrollableAnchor>
  </div>
);
