import React,{Component} from 'react';
import Image from '../assets/download.jpg';

class AgeStates extends Component {
    timeSince(date){
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);
        let days = Math.floor(difference / (1000*3600*24));
        
        let years = Math.floor(days/365);
        days -= years*365 ;
        let months = Math.floor(days/31);
        days -= months*31 ;
        
        return `${years} years, ${months} month ,${days} days`;
    }
    render(){
        return (
           <div>
             <h3>  {this.props.date}</h3>
             <h4>Congrate ,Your age is {this.timeSince(this.props.date)}</h4>
             <img src={Image} alt="mohenmondal" className="Image" />
            
           </div>     
        )
    }
}

export default AgeStates ;