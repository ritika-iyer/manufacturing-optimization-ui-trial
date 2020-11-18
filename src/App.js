import React , {Component} from 'react';
import TitleBar from './components/TitleBar/TitleBar';
import DbTable1 from './components/DbTable1/DbTable1';
import Chart1 from './components/Chart1/Chart1';
import DbTable2 from './components/DbTable2/DbTable2';
import DbTable3 from './components/DbTable3/DbTable3';
import './App.css';

class App extends Component {
  render () {
    return (
    <div className="App">
        <TitleBar />
        <DbTable1 />
        <Chart1 />
        <DbTable2 />
        <DbTable3 />

    </div>
  );
  }
  
}

export default App;
