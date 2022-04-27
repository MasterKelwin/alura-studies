import React from 'react';
import Botao from '../components/button';
import Form from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
    </div>
  );
}

export default App;
