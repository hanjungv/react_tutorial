import React from 'react';

export default class ContactDetails extends React.Component{
  render(){
    const details =(
      <div>
        <p>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = (<div>Not Selected</div>);

    return(
      <div>
        <h1>Details</h1>
        {this.props.isSelected ? details : blank}
      </div>
    );
  }
}

ContactDetails.defaultProps ={
  contact:{
    name:'',
    phone:''
  }
};


//State 내부 배열 처리(immutable.js) or concat 을 통해 기존 배열을 두고 그대로 배열을 씀
