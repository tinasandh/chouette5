import React, { Component } from 'react';

class History extends Component {
    constructor() {
        super(); 
        this.state = {
                persons:[]            
        };
    }
    //lifecycle method
    //fetch + api call
    //results - usually json
    //map over data
    //set key
    //select what data to return
    //update state
    componentDidMount(){ 
        fetch('http://localhost:58900/api/Caps/getApplication?id=1')
        .then(results => {return results.json();
        })
        .then(data => {
            console.log(data)
            let persons = data.map((person) => {
                return ( 
                    <div key={person.applicationId}>  
                    <span>{person.ssn}</span>
                    <span>{person.productName}</span>
                    
                    </div>
                )
            }  
                
            )
            this.setState({persons:persons});
            console.log("state", this.state.persons)
        })
    }
    /**componentDidMount(){ 
        fetch('http://api.eniro.com/cs/search/basic?country=se&version=1.1.3&profile=frontEndTest12&key=6111238394344117116&search_word=bio')
        .then(results => {return results.json();
        })
        .then(data => {
            console.log(data.adverts)
            let persons = data.adverts.map((person) => {
                return ( 
                    <div key={person.eniroId}>  
                    <span>{person.eniroId}</span>
                    <span>{person.companyInfo.companyName}</span>
                    
                    </div>
                )
            }  
                
            )
            this.setState({persons:persons});
            console.log("state", this.state.persons)
        })
    } */

  render() {
    return (
      <div className="animated fadeIn">
        {this.state.persons}
      </div>
    )
  }
}

export default History;
