import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './SidebarItem.css';

const SidebarItem = ({item}) => {
  return (
    <a href={item.name} className='SidebarItem'>
      <ListItem button>
        <ListItemText className='ListItemText'>
          {item.label}
        </ListItemText>
      </ListItem>
    </a>
  );
}

export default SidebarItem;
