import Cronometro from '../components/cronometro';
import Form from '../components/form';
import Lista from '../components/list';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
