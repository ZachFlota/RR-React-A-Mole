import React, { useState } from 'react';
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    const [displayMole] = useState(false);
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
            <EmptySlot />
        </div>
    )
}

export default MoleContainer 