import React from 'react'
import { Icon } from 'semantic-ui-react'

export default function HeaderRow({name, children}) {
    return (
        <h3>
            <Icon name={name} color='teal' />
            { children}
        </h3>
    )
}
