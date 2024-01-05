import Signup from './Components/Signup/Signup'
import {Routes,Route} from 'react-router-dom';
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Signup/>}/>
      Hello its main
    </Routes>
  )
}

export default App
