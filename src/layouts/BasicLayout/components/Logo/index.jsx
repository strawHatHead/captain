import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import imgSrc from '@p/images/favicon.png';

export default function Logo(props) {
  const { className = '' } = props;
  return (
    <div className={`${styles.logo} ${className}`}>
      <Link to="/base" className={styles.logo}>
        <img src={imgSrc} alt=""/>
      </Link>
    </div>
  );
}
