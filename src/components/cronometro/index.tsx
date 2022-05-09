import Botao from "../button";
import Relogio from "./relogio";
import style from "./cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from '../../types/tarefa'
import { useEffect, useState } from "react";

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
    //console.log('conversão: ', tempoParaSegundos('01:01:01'))
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado?.tempo))
        }
    },[selecionado])

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p> 
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
} 