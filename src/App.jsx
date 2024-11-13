import Lists from './Components/Geeks/Lists'
import './App.css';
const fruits=[
  {
    name:"Apple",
    price:30,
    emoji:"🍎"
  },
  {
    name:"Grapes",
    price:25,
    emoji:"🍇"
  },
  {
    name:"Strawnerry",
    price:30,
    emoji:"🍓"
  }
]

export default function App(){
  return(
    <div>
      <Lists fruits={fruits}/>
    </div>
  );
}
