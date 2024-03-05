import React from 'react';
import Sectionimg from '../../assets/fundo.jpg';

const sectionStyle: React.CSSProperties = {
  width: '100%',
  height: '704px',
  backgroundImage: `url(${Sectionimg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  border: '1px solid #000',
};

function Section1() {
  return (
    <section style={sectionStyle}>
      
    </section>
  );
}

export default Section1;
