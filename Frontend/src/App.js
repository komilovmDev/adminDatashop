import Login from "./pages/login/Login";
import Admine from "./pages/admin/Admine";
import {BrowserRouter , Routes , Route , Link} from 'react-router-dom'
import { useState } from "react";

function App() {
  const [app , setapp] = useState(<Login />)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login setapp={setapp} />}/>
          <Route path='/app' element={app}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;