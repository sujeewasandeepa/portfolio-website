import { Outlet } from 'react-router-dom';
import Dock from './components/Dock';

function App() {

  return (
  <>
    <div>
      <Outlet/>
    </div>
    <div>
      <Dock/>
    </div>
  </>
  )
}

export default App
