import React, { useContext } from 'react';
import'./styles.scss';
import { Context } from '../../context/DataContext';

import Bar from '../../components/Bar'
import Tableau from '../../components/Tableau'

function Main() {
    const { active } = useContext(Context)
  return (
      <div className="main">
        <Bar />
        { active ? <Tableau /> : ''}
      </div>
  );
}

export default Main;