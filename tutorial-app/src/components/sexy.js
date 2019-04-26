import React from 'react';


function Sexy(props) {

    const { sexyTgirls, deleteTgirl } = props;

    const tgirlsList = sexyTgirls.map(tgirl => {

        if(tgirl.age > 22) {
            return (
                <div className="sexy" key={ tgirl.id }>

                    <p>
                        { tgirl.id }: { tgirl.name }, { tgirl.age } | <button onClick={ () => {deleteTgirl(tgirl.id)} }>X</button>
                    </p>
                </div>
            )
        } else {
            return null;
        }

    });

    return (
        <div className="sexy">

            <h4>This is the list of sexy tgirls!</h4>

            { tgirlsList }

        </div>
    )

}



export default Sexy;