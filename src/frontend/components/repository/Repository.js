import React from 'react';
import MyImageSvg from '../../../img/github.svg';

const Repository = () => {
  return (
    <a href="http://github.com/lozzo27">
      <img src={MyImageSvg} alt="Github"/>
    </a>
  );
}

export default Repository;
