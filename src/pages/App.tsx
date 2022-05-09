import Cronometro from '../components/cronometro';
import Form from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';
import React from 'react';
import { ITarefa } from "./../types/tarefa";

function App() {
  const [tarefas, setTarefas] = React.useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = React.useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro />
    </div>
  );
}

export default App;
