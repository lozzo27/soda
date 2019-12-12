import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const SidebarItem = ({item}) => {
    
  return (
    <ListItem button>
        <ListItemText>{item.label}</ListItemText>
    </ListItem>
  );
}

export default SidebarItem;
