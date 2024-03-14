import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  return (
    <Wrapper>
      {/* <HeroImage src="/images/hero-img.jpg" /> */}
      {/* <HeroImage 
        src="/images/hero-img.jpg"
        srcSet='
          /images/hero-img.jpg 500w,
          /images/hero-img@2x.jpg 1000w,
          /images/hero-img@3x.jpg 1500w'
      /> */}
      <picture>
        <source 
          srcSet='
          /images/hero-img.avif 500w,
          /images/hero-img@2x.avif 1000w,
          /images/hero-img@3x.avif 1500w
          '
        />
        <source 
          srcSet='
          /images/hero-img.png 500w,
          /images/hero-img@2x.png 1000w,
          /images/hero-img@3x.png 1500w
          '
        />
        <HeroImage 
          src="/images/hero-img.jpg"
        />
      </picture>
      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
