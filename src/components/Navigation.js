import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  TextField,
  List,
  ListItem,
  Divider
} from "react95";

const Navigation = props => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ height: "auto" }}>
      <AppBar
        verticalAlign="bottom"
        style={{ position: "fixed", top: "auto", bottom: "0" }}
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div
            style={{
              position: "relative",
              display: "inline-block",
              alignSelf: "left"
            }}
          >
            {open && (
              <List
                horizontalAlign="left"
                verticalAlign="top"
                open={open}
                onClick={handleClose}
              >
                <ListItem size="sm">Programs</ListItem>
                <ListItem size="sm">Games</ListItem>
                <Divider />
                <ListItem size="sm">Log Out</ListItem>
              </List>
            )}
            <Button variant="menu" onClick={handleClick} active={open}>
              Menu
            </Button>
          </div>
          <TextField placeholder="Search..." width={150} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
