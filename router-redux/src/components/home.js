import React, { Component } from 'react';

import Posts from './Posts';


class Home extends Component {


    render() {

        return (
            <div className="App">

                <div className="container">
                    <h4 className="center">Home</h4>
                    <p>
                        I got laid off about a year and a half ago. I applied for literally a few hundred jobs.
                        I heard anything back on maybe 10% of them. After talking to an HR person I got a second phone screening from maybe half of those.
                        I had real in person interviews at about 10 places. I ended up with 3 job offers. Almost everyone else at one stage ghosted me.

                        I did hear from a handful months later. The most recent one was a couple months ago. They had finally gotten around to
                        finishing their prescreening and were ready to start interviewing.
                        How many people did they think were going to sit around waiting for them to call more than a year later?
                    </p>

                    <Posts />

                </div>


            </div>
        )
    }
}




export default Home;
