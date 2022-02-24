import React, { useEffect } from 'react';
import { initAnimations } from '../../../animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from '../../UI/Header';
import Navigation from '../../UI/Navigation';

gsap.registerPlugin(ScrollTrigger);
const Page = ({ children }) => {
  useEffect(() => {
    window.addEventListener('load', () => {
      initAnimations();
    });
  }, []);
  return (
    <div id='viewport'>
      <main id='main' data-barba='container'>
        <Navigation />
        <Header />
        {children}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>{' '}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel animi natus
          dolorum unde, mollitia odit placeat, dicta, beatae expedita minima ipsa fugiat
          quaerat ratione ex possimus corporis. Vel, voluptas nemo!
        </p>
      </main>
    </div>
  );
};

export default Page;
