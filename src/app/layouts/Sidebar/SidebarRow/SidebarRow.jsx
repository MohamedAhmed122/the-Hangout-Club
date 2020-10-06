import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'
import './StyleSidebarRow.css'

export default function SidebarRow({ icon,title, link}) {
    return (
        <div className='sidebar_row'>
            <Link exact to={link}>
                <Header as='h3'>
                    <Icon  name = {icon} size='large' color='teal'  />
                    <Header.Content>{title}</Header.Content>
                </Header>
            </Link>
        </div>
    )
}
