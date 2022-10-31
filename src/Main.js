import { useState } from 'react';

import Menu from './components/Menu';
import Header from './components/Header';
import Home from './components/Home';
import History from './components/History';
import Filosophy from './components/Filosophy';
import Dojos from './components/Dojos';

import styles from './styles/Main.module.scss';

function Main() {
    const [page, setPage] = useState(1);

  return (
    <div className={styles.App}>
        <Header />
        <Menu setP={setPage} />
        { page === 2 ? <History setP={setPage} /> : '' }
        { page === 1 ? <Home setP={setPage} /> : '' }
        { page === 3 ? <Filosophy setP={setPage}/> : '' }
        { page === 4 ? <Dojos setP={setPage}/> : '' }
    </div>
  );
}

export default Main;
