import React from 'react';
import { observer } from 'mobx-react';

const Item = ({item}) => {
    return(
        <div>
            <li>
                {item.name} - Minutes needed {item.time_taken}
            </li>
        </div>
    )
}

export default observer(Item);