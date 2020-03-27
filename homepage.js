import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import Review from './Review.js';

  // const BMI = (props) => {
  //   const { steps } = props;
  //   const height = steps.height.value;
  //   const weight = steps.weight.value;
  //   const bmi = Number(((weight / (height * height)) * 10000).toFixed(1));
  //   let result = 'Underweight';
  
  //   if (bmi >= 18.5 && bmi < 25) {
  //     result = 'Normal weight';
  //   } else if (bmi >= 25 && bmi < 30) {
  //     result = 'Overweight';
  //   } else if (bmi >= 30) {
  //     result = 'Obesity';
  //   }

  //   return (
  //       <div className="test">
  //         Your BMI is {bmi} ({result})
  //       </div>
  //     );
  //   };

  //   BMI.propTypes = {
  //       steps: PropTypes.object,
  //     };
      
  //     BMI.defaultProps = {
  //       steps: undefined,
  //     };
   
class Homepage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          gender: '',
          age: '',
        };
      }
    
    render() {
     
        return (
            <div>
                <p> Hello I'm homepage...</p>
                
            </div>
        );
    }
}

export default Homepage;
