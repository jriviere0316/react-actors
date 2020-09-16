import React, { Component } from 'react';
const initialState = {
    firstName: '',
    lastName: '',
    bestImpression: ''
}

class Contact extends Component {
    state = initialState

    onFirstNameChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value');
        
        this.setState({
            firstName: event.target.value
        });
      }
    
    onLastNameChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value');
        
        this.setState({
            lastName: event.target.value
        });
      }
    onImpressionChange = (event) => {
        console.log('event.target', event.target);
        console.log('event.target.value');
        
        this.setState({
            bestImpression: event.target.value
        });
      }   
    onClickMeClick = () => {
        
        alert(`Thanks for joining us ${this.state.firstName}`);
        console.log(this.state);
    this.setState(initialState);

    }
    render() {
        return (
            <div>
                <h2>Contact</h2>
                <input type="text" value={this.state.firstName} placeholder= "First name" onChange={this.onFirstNameChange} />
                <input type="text" value={this.state.lastName} placeholder= "Last name" onChange={this.onLastNameChange} />
                <input type="text" value={this.state.bestImpression} placeholder= "Best impression" onChange={this.onImpressionChange} />
                <button onClick={this.onClickMeClick}>Join Us!</button> 
                
                {
                this.state.firstName && this.state.lastName && this.state.bestImpression && 
                <p>{this.state.firstName} {this.state.lastName}'s best impression is {this.state.bestImpression}</p>
                }

                <p>Phone: 1-800-WE-REACT</p>
                <p>Email: info@ReactActors.com</p>
            </div>
        )
    }
}


//<p>{clickerMessage}</p>
export default Contact;