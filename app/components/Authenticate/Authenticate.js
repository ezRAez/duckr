import React, { PropTypes } from 'react';
import { container, title, err } from "./styles.css";
import { FacebookAuthButton } from 'components';

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired
}

export default function Authenticate({error, isFetching, onAuth}) {
  return (
      <div className={container}>
        <h1 className={title}>{"Authenticate"}</h1>
        <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
        {error ? <p className={err}>{error}</p> : null}
      </div>
    );
}
