import Botao from "../button";
import Relogio from "./relogio";
import style from "./cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";

export default function Cronometro() {
    console.log('conversão: ', tempoParaSegundos('01:01:01'))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p> 
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
} 