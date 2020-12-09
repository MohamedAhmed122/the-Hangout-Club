import React from 'react';
import { Menu } from 'semantic-ui-react';
import './StyleSidebar.css'

function EventFilter({predicate, setPredicate, loading}) {
    return (
        <div className='event__filter'>
            <Menu vertical>
                <Menu.Item
                content="All Events"
                active={predicate.get("filter") === "all"}
                onClick={() => setPredicate("filter", "all")}
                disabled={loading}
                />
                <Menu.Item
                    content="I'm going"
                    active={predicate.get("filter") === "isGoing"}
                    onClick={() => setPredicate("filter", "isGoing")}
                    disabled={loading}
                />
                <Menu.Item
                    content="I'm Hosting"
                    active={predicate.get("filter") === "isHost"}
                    onClick={() => setPredicate("filter", "isHost")}
                    disabled={loading}
                />
            </Menu>
            
        </div>
    );
}

export default EventFilter;