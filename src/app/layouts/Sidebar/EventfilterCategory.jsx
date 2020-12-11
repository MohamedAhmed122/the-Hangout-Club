import React from 'react';
import { Menu } from 'semantic-ui-react';
import './StyleSidebar.css'

function EventFilterCategory() {
    return (
        <div className='event__filter'>
            <Menu vertical>
                <Menu.Item content="Food"/>
                <Menu.Item content="Music"/>
                <Menu.Item content="Education"/>
                <Menu.Item content="Travel"/>
                <Menu.Item content="Film"/>
                <Menu.Item content="Drinks"/>
                <Menu.Item content="Culture"/>
            </Menu>
            
        </div>
    );
}

export default EventFilterCategory;

// active={predicate.get("filter") === "isHost"}
// onClick={() => setPredicate("filter", "isHost")}
// disabled={loading}