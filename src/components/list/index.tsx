import Item from './item';
import style from './lista.module.scss';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '01:30:00'
      }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
        }, {
        tarefa: 'Typescript',
        tempo: '00:45:00'
        }
      ]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;