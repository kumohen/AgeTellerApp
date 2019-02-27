import React,{Component} from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';
import './app.css';
import AgeStates from './agestate';

class App extends Component {
    constructor(props){
        super();
        this.state = {
            newDate:'',
            birthday:'1996-12-31',
            showState:false
           
        }
    }
    changeBirthday(){
        console.log(this.state);
        
        this.setState({birthday:this.state.newDate,
            showState:true
        });
    }
    render(){
        return (
            <div className="App">
            <h2>Write Your Birthday Date</h2>
                <Form className="form">
                <FormControl type="date"
                onChange= {event => this.setState({newDate : event.target.value})}
                >
                </FormControl>
                {' '}
                <Button  onClick ={() => this.changeBirthday() } className="button" >Submit</Button>
                {
                    this.state.showState ? 
                    <AgeStates date={this.state.birthday}/>
                    :<div></div>
                }
                
                </Form>
            </div>
            )
    }
}

export default App;