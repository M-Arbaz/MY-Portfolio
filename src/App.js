import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import Main from './component/Main';
function App() {
  useEffect(()=>{
 document.title="M-Arbaz || Home"

  },[])
  return (
<>
<Main />
</>
  );
}

export default App;
