import React from 'react';
import { container, innerContainer } from './styles.css';
import { Navigation } from 'components';

function MainContainer(props) {
  return (
    <div className={container}>
      <Navigation isAuthed={false} />
      <div className={innerContainer}>
        {props.children}
      </div>
    </div>
  );
}

export default MainContainer;
