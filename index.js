import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component 
{
  constructor(props)
   {
    super(props);
    this.state = 
    {
      liczba: 0,
      history: [{liczba: 0}]
    }
     this.los=this.los.bind(this);
     this.cof=this.cof.bind(this);
  }
cof()
{
  const history=this.state.history;
  history.pop();
  this.setState({history:history})
  const history1=this.state.history;
  const current=history1.length-1;
  this.setState({liczba:history1[current].liczba})
}
los() 
{
  this.setState({liczba: Math.floor(Math.random()*100)})
  const history=this.state.history;
  this.setState({history:history.concat([{liczba: this.state.liczba}])})
  console.log(this.state)
}
  render() 
  {
    return (
    <div id="pierwsz">
      <button onClick={this.los}>LOSUJ</button>
      <button onClick={this.cof}>Cofnij</button>
      <div id="drug">
        {this.state.liczba}
      </div>
    </div>
    )
  }
}
ReactDOM.render(
  <Form />,
  document.getElementById('root')
);
