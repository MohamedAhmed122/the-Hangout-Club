import React from 'react'
import { useState } from 'react'
import EventFilter from './EventFilter'
import EventFilterCategory from './EventfilterCategory'
import SidebarRow from './SidebarRow/SidebarRow'

export default function EventFilters({predicate, setPredicate, loading}) {
    const [displayFiler, setDisplayFiler ] = useState(false)
    const [displayFilerCategory, setDisplayFilerCategory ] = useState(false)
    return (
        <>
            <SidebarRow title='Filter Hosting' onClick={()=>setDisplayFiler(!displayFiler)} />
            { displayFiler &&    
                <EventFilter 
                predicate={predicate} 
                setPredicate={setPredicate} 
                loading={loading} />}
            <SidebarRow  title='Filter Categories'   onClick={()=> setDisplayFilerCategory(!displayFilerCategory)} /> 
            {displayFilerCategory &&  
                <EventFilterCategory 
             
                />  
            }
        </>
    )
}
