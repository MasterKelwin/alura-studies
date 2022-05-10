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
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }

  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas} 
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}  
      />
    </div>
  );
}

export default App;
