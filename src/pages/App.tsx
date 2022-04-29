import Cronometro from '../components/cronometro';
import Form from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';
import React from 'react';
import { ITarefa } from "./../types/tarefa";

function App() {
  const [tarefas, setTarefas] = React.useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
