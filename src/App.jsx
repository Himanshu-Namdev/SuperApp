import Signup from './Components/Signup/Signup'
import SelectCategory from './Components/SelectCategoryRoute/SelectCategory';
import Homepage from './Components/Homepage/Homepage';
import Entertainment from './Components/Entertainment/Entertainment';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/SelectCategory" element={<SelectCategory/>} />
      <Route path="/Homepage" element={<Homepage/>} />
      <Route path="/Entertainment" element={<Entertainment />} />
    </Routes>
  )
}

export default App
