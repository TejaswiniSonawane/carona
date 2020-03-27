import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Homepage.css';
  
class Review extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          age: '',
          symptoms: '',
          more_symptums: '',
          travel_history: '',
          conditions: '',
          symptoms_progress: '',
        };
      }

      componentWillMount() {
        const { steps } = this.props;
        const { name,
                age ,
                symptums,
                more_symptums,
                travel_history,
                conditions,
                symptoms_progress, } = steps;
    
        this.setState({ name, 
                        age,
                        symptums,
                        more_symptums,
                        travel_history,
                        conditions,
                        symptoms_progress, });
      }
    
    render() {
        const { name, 
                age,
                symptums,
                more_symptums,
                travel_history,
                conditions,
                symptoms_progress, } = this.state;
        return (
          <div style={{ width: '100%' }}>
            <h3>Summary</h3>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{name.value}</td>
                </tr>
                <tr>
                  <td>Age</td>
                  <td>{age.value}</td>
                </tr>
                <tr>
                  <td>No of Symptums</td>
                  <td>{symptums.value}</td>
                </tr>
                <tr>
                  <td>More Symptums</td>
                  <td>{more_symptums.value}</td>
                </tr>
                <tr>
                  <td>Travel History</td>
                  <td>{travel_history.value}</td>
                </tr>
                <tr>
                  <td>No of Conditions</td>
                  <td>{conditions.value}</td>
                </tr>
                <tr>
                  <td>Symptoms Progress</td>
                  <td>{symptoms_progress.value}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
    }
}


Review.propTypes = {
    steps: PropTypes.object,
  };
  
Review.defaultProps = {
    steps: undefined,
  };

export default Review;
