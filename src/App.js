import React from 'react';
import UserList from './components/UserList';
// Importam formularul.
import UserAddForm from './components/UserAddForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      users: []
    };    
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Inainte de a actualiza state-ul, filtram userii, astfel incat sa ramanem doar cu primii 5.
        data = data.filter(user => user.id < 6);
        // Pentru fiecare user ramas, ii setam valoarea false pentru cheia isGoldClient
        data.forEach(user => {
          user.isGoldClient = false;
        });
        // Vectorul users din state este populat dupa ce ne vin datele de la API.
        this.setState({users: data});
      })
  }

  changeColor(event) {
    this.setState({background: event.target.value});    
    // console.log(this.state.background);    
  }

  // functia getMaxId calculeaza Id-ul maxim pentru un vector de useri
  getMaxId(users) {
    let maxId = 0;

    // parcurge fiecare user si verifica daca id-ul lui e mai mare decat cel mai mare id de pana atunci
    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;    
  }

  validationForm(name, email) {

    let is_valid = true;

    if (name === '' || name.length < 3){
      alert('Please fill the name adress');
      return is_valid = false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please fill the email adress');
      return is_valid = false;
    }

    return is_valid ;
  }
  
  submitAddForm(event, name, email, isGoldClient) {
    // Daca nu se foloseste preventDefault, la submiterea formularului se va reincarca pagina
    event.preventDefault();

    const is_valid = this.validationForm(name, email);
   if (is_valid) {   
        this.setState(prevState => {
          
          return {          
            users: [
              ...prevState.users,
              {
                // Pentru id luam valoarea maxima din state-ul precedent si il incrementam cu 1.
                id: this.getMaxId(prevState.users) + 1,
                name,
                email,
                isGoldClient
              }
            ]
          }
        });
      }
  }  

  deleteUser(id) {
    const newUsers = this.state.users.filter((user) => {
      return user.id !== id
    });
    
    this.setState({users: newUsers})                   
}
 
  render() {
    
    return(
      <div className="app" style={{background: this.state.background}}>
        <h1>Practice 4</h1>
        
        <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>        

        {/* Randam componenta UserList, careia ii trimitem ca proprietati userii din state. */}
        <UserList users={this.state.users} deleteUser={(id)=>this.deleteUser(id)} />
        
        <h3>Change background color</h3>
        <input type="color" onChange={(event) => this.changeColor(event)}/>
      </div>
    );
  }
}

export default App;
