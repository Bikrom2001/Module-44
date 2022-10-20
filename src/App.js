import logo from './logo.svg';
import './App.css';

const Number = 555;
const singers =[ 
{ name: 'Dr .mosfis', title: 'singer' },
{ name: 'Eva Rahoman', job: 'singers' },
{ name: 'agun', job: 'sopno' },
{ name: 'suparna', job: 'parto' },
]

const singerStyle = {
  color: 'red',
  backgroundColor: "white",
}


function App() {
  const nayoks = ['Ruble', 'Kuber', 'bappaRaz', 'josim', 'salman sasha', 'alu'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name = {nayok}></Person>)
      } */}

  {
    singers.map(singer => <Person name = {singer.name}></Person>)
  }

      {/* <Person name={nayoks[0]} naika = 'karina'></Person>
      <Person name = {nayoks[1]} naika = 'chomma'></Person>
      <Person name = {nayoks[2]} naika = 'savana'></Person> */}
      <Friends phone ="013-2333333"></Friends>
      <Friends phone="0195466544"></Friends>
   
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.naika}</p>
  </div>
  )
}

function Friends(props){
  return(
    <div className='container'>
      <h3>Name: Ajoy Ghan</h3>
      <p>Phone: {props.phone}</p>
    </div>

  )
}

export default App;
