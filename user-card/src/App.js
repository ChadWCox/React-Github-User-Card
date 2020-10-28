import React from 'react';
import styled from 'styled-components';
import axios from 'axios'



const CardWrapper = styled.div `
    width: 400px;
    font-family: arial, sans-serif;
    border-radius: 5px;
    background-color: #FFF5EE;
    `

    const CardHeader = styled.header`
    `   

    const CardHeading = styled.h2`
        font-size: 18px;
        font-weight: medium;
        text-align: left;
    `

    const CardImg = styled.img`
        width: 350px;
        max-height: 100%;
    `

const gitUsers = [ 'ChadWCox', 'robertmasters', 'PedroVanT', 'cladams0203', 'ajg7', 'Richard-McGhee', 'odst0016' ]; 


class App extends React.Component {
    state = {
      users: []
    }

    
    componentDidMount() {
      this.fetchData();
    }

  fetchData = () => {
    gitUsers.forEach(name => {
      axios
        .get(`https://api.github.com/users/${name}`)
        .then(res => {
          this.setState({
            users:res.data
          })
        })
      .catch(err => {
        console.log(err)
      })
  })}
    
  render() {

    return (
    <div className="App">
      <header>
        <h1>Github User Cards</h1>
      </header>
      <body>
          <CardWrapper>
            <CardHeader>
                {this.state.users.map(user => (<CardHeading key={user}>{user.name}</CardHeading>))}
            </CardHeader>
            <body>
              {this.state.users.map(user => (<CardImg key={user} src={user.avatar_url}/>))}
              </body>
          </CardWrapper>
      </body>
    </div>
  );
}
}

export default App;
