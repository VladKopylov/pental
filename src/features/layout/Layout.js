import React from 'react';
import Navbar from '../navbar/Navbar';
import Block1 from '../blocks/Block1';
import { Block2 } from '../blocks/Block2';
import { Block3 } from '../blocks/Block3';
import { Block4 } from '../blocks/Block4';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Block1 />
      <Block2 />
      <Block3 />
      <Block4 />
    </div>
  );
};

export default Layout;
