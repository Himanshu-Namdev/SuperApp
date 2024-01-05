import Signup from './Components/Signup/Signup'
import SelectCategory from './Components/SelectCategoryRoute/SelectCategory';
import {Routes,Route} from 'react-router-dom';
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/SelectCategory" element={<SelectCategory/>} />
    </Routes>
  )
}

export default App
