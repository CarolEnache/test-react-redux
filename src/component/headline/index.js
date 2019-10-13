import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Headline extends Component {

  render(){
    const { header, desc } = this.props;

    if(!header) {
      return null;
    }

    return (
      <div data-test="headline-component">
        <h1 data-test="header">{header}</h1>
        <p date-test="desc">{desc}</p>
      </div>
    )
  }
};

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fName: PropTypes.string,
    lName: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    onlineStatus: PropTypes.bool,
  }))
}

export default Headline;