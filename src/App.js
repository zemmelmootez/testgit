import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import Adresse from './components/Adresse';
import FullName from './components/FullName';
import picture from './a.jpg'
function App() {
  const x=5
 const test=()=>{
   alert("hello")
  } 

  return (
   <div>
   <ProfilePhoto>{picture}</ProfilePhoto>
   <FullName age="15" ville="sahline" x={x} test={test}></FullName>
   <Adresse></Adresse>
  
   </div>
  );
}

export default App;
