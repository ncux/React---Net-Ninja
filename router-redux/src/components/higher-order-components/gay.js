import React from 'react';


function GayColour(Component) {

    const colours = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];

    // Getting a (random) number between two values: max (5) and min (0)
    const randomColour = colours[Math.round(((5 - 0) * Math.random()) + 0)];

    // apply Materialize CSS color class:
    const className = `${randomColour}-text`;

    return (props) => {
        return (
            <div className={ className }>
                <Component {...props} />
            </div>
        )
    }
}



export default GayColour;
