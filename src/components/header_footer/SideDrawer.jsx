import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <div>
      <Drawer
        anchor="right"
        open={props.open}
        onClose={() => {
          props.onClose(false);
        }}
      >
        <List component="nav">
          <ListItem
            button
            onClick={() => {
              console.log("clicked");
            }}
          >
            Event Starts in
          </ListItem>
          <ListItem button>Venue info</ListItem>
          <ListItem button>Highlights</ListItem>
          <ListItem button>Pricing</ListItem>
          <ListItem button>Location</ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
