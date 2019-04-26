import React from 'react';
import GayColour from './higher-order-components/gay';


function About(props) {

    console.log(props);   // the props have a bunch of shit from the router if the router is made like this:  <Route path="/about" component={ About }/>

    setTimeout(() => props.history.push('/contact'), 5000);

    return (
        <div className="App">

            <div className="container">
                <h4 className="center">About page</h4>
                <p>
                    I'm an international student attending a music college in the US, and I'm supposed to graduate in about three more weeks.
                    I've had a history of depression and feeling generally apathetic towards anything in life which reached a high point in 2014,
                    and recently it's come back and plagued my entire outlook on my days. I started attending college in 2012,
                    and after two years I had to go back to my home country of South Korea to serve in the military for two years.
                    Unlike most people, I was looking forward to going to the army because I was growing sick of college life and was becoming highly dependent on alcohol to function.
                </p>

            </div>


        </div>
    );
}

export default GayColour(About);
