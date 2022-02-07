import './App.css';

//App Components
import Dashboard from './components/Dashboard'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Feed />
      <Sidebar className='sideNav'/>
    </div>
  );
}

export default App;
