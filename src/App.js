import React, {Component} from 'react';

import './App.css';
import './component/card-list/card-list.jsx';
import { CardList } from './component/card-list/card-list.jsx';
import { SearchBox} from './component/search-box/search-box.jsx';



class App extends Component{
  
  constructor() {
    super();
    this.state = {
      monsters: [  ],
      searchresult: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(re => re.json())
    .then(u => this.setState({monsters: u}))
  }
  
    render(){
      const {monsters,searchresult} = this.state;
       const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(
         searchresult.toLowerCase())
       );

      return (
        <div className="App">
          <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='Monster Search'
handleChange={e => this.setState({ searchresult: e.target.value }, () => console.log(this.state))} />
          
          <CardList monsters = {filteredmonsters} />

          
          
          
        </div>
      );
    }
    

}
export default App;
