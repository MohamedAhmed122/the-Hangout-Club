import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import './StyleSidebarRow.css'

export default function SidebarRow({ icon,title}) {
    return (
        <div className='sidebar_row'>

            <Header as='h3'>
                <Icon  name = {icon} size='large' color='teal'  />
                 <Header.Content>{title}</Header.Content>
            </Header>
        </div>
    )
}
