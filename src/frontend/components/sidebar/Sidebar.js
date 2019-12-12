import React from 'react';
import List from '@material-ui/core/List'
import SidebarItem from '../sidebaritem/SidebarItem'
import './Sidebar.css';


function Sidebar() {
  const items = [
    { name: 'home', label: 'Home' },
    { name: 'cv', label: 'CV' },
    { name: 'repository', label: 'Repository' },
  ]

  const sideBarItems = items.map(item => <SidebarItem item={item} key={item.name}/>);
  return <List className="Sidebar" disablePadding dense>
    {sideBarItems}
  </List>
}

export default Sidebar;
