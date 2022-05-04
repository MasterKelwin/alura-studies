import Item from './item';
import style from './lista.module.scss';
import React from 'react';
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}


function Lista({ tarefas, selecionaTarefa }: Props) {

    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item) => (
                <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;