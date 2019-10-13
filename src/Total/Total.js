import React, { Component } from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Total extends Component {
    render() {
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(this.props.total)}
                </div>
            </div>
        )
    }
}

export default Total;