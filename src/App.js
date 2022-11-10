import { useState } from 'react';
import CardList from './components/card-lists/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useEffect } from 'react';

const App =()=>{
  const [searchField,setSearchField]=useState('');
  const [monsters,setMonsters]=useState([]);
  const [filterM,setFilterM]=useState(monsters);

  console.log(searchField);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((user)=>setMonsters(user));

  },[]);
  useEffect(()=>{
    const newFilterM=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterM(newFilterM);
  },[monsters,searchField]);

  const onSearchChange =(event)=>{
    const searchFieldString=event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">
      <h1 className='title'>Monster rolodex</h1>

      <SearchBox 
            className='monster-search-box'
            placeholder='search monster'
            onChangeHandler={onSearchChange}
      />
      <CardList monsters={filterM}/>
    </div>

  );
}

// class  App extends Component {
//   constructor(){
//     super();
//     this.state={
//       monsters:[],
//       searchField:''
//     };
//   }

//   componentDidMount(){

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response)=>response.json())
    //   .then((user)=>{
//         this.setState(()=>{
//           return {monsters :user}
//         },
//         ()=>{
//           console.log(this.state);
//         })
//       })
//   };

//   onSearchChange =(event)=>{
//     console.log(event.target.value);
    
//     const searchField=event.target.value.toLocaleLowerCase();
//     this.setState(
//       ()=>{
//       return {searchField}}           
//     );
//   };

//   render(){
//     const {monsters,searchField}=this.state;
//     const {onSearchChange}=this;

    // const filterM=monsters.filter((monster)=>{
    //   return monster.name.toLocaleLowerCase().includes(searchField);
    // });

//     return (
    // <div className="App">
    //   <h1 className='title'>Monster rolodex</h1>
      // <SearchBox 
      //       className='monster-search-box'
      //       placeholder='search monster'
      //       onChangeHandler={onSearchChange}
      // />

      // <Cardlist monsters={filterM}/>
  //   </div>
  // );
//   }
// }

export default App;
