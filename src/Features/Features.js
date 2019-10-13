import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Features extends Component {
    updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.props.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <div key={itemHash} className="feature__item">
                        <input
                            type="radio"
                            id={itemHash}
                            className="feature__option"
                            name={slugify(feature)}
                            checked={item.name === this.props.state.selected[feature].name}
                            onChange={e => this.props.updateFeature(feature, item)}
                        />
                        <label htmlFor={itemHash} className="feature__label">
                            {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
                    </div>
                );
            });

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
};

export default Features;