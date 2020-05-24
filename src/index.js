import React from 'react';
import styles from './styles.module.css';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export const ExampleComponent1 = ({ text }) => {
  return <div className={styles.test}>Example Component 1: {text}</div>;
};
