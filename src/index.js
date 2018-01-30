import React from 'react';
import { render } from 'react-dom';

class PizzaOrder extends React.Component {
  constructor () {
    super();
    this.crust = ["","thick", "thin", "normal"]
    this.cheese = ["","mozzerella", "parmesean", "provolone"]
    this.state = {
      crust: "",
      cheese: ""
    }
  }

  handleSlection = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    
    this.setState({
      [inputName]: e.target.value,
    }) 
  }

  handleListUpdate = (e) => {

  }

  render () {
    console.log(this.state)
    return (
      <div>
        <p>
        Choose your crust: <select name="crust" onChange={this.handleSlection}>{this.crust.map(ele => {
          return <option value={ele}>{ele}</option>
        })}</select>
        </p>
        <p>Choose your cheese: <select name="cheese" onChange={this.handleSlection}>{this.cheese.map(ele => {
          return <option value={ele}>{ele}</option>})}
          </select>
        </p>
          {(this.state.crust && this.state.cheese) ?
            (<div>
              <h3>Order Summary</h3>
                <ul>
                  <li>
                    {this.state.crust} crust
                  </li>
                  <li>
                    {this.state.cheese} cheese
                  </li>
                </ul>
            </div>)
          : "Please select a crust and cheese"}
        <p>
          
        </p>
      </div>
    )
  }
}

render(<PizzaOrder />, document.getElementById('root'));
