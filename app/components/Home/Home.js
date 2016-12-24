import React from 'react';
import {container, title, slogan}  from './styles.css'

export default function Home(props) {
  return (
    <div className={container}>
      <p className={title}>{'Moms!'}</p>
      <p className={slogan}>{'Gah Mam! These moms, embarrassing! Lets talk about it!'}</p>
    </div>
  );
}
