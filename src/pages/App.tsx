import Cronometro from '../components/cronometro';
import Form from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';
import React from 'react';

function App() {
  const [tarefas, setTarefas] = React.useState([{
    tarefa: 'React',
    tempo: '02:00:00'
}, {
    tarefa: 'JavaScript',
    tempo: '01:00:00'
}, { 
    tarefa: 'Typescript',
    tempo: '03:00:00'
}
]);
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
