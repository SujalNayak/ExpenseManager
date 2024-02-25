import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const [role, setrole] = useState("user");

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };
  const adminLinks = [
    {
      title: "Admin Home",
      linkTo: "/admin",
    },
    {
      title: "Add Product",
      linkTo: "/admin/add-product",
    },
    {
        title:"Add service",
        linkTo: "/admin/add-service"
    }
  ];
  const userLinks = [
    {
      title: "Home",
      linkTo: "/",
    },
    {
      title: "Shop",
      linkTo: "/shop",
    },
    {
      title: "Cart",
      linkTo: "/cart",
    },
    {
      title: "Dashboard",
      linkTo: "/user/dashboard",
    },
    {
        title: "Features",
        linkTO: "/user/features"
    },
    {
        title: "Our work",
        linkTo:"/user/ourwork"
    },
    {
        title: "Qr Code",
        linkTo:"/components/QrCode/QrCodeScanner"
    }
  ];

  console.log("drawer", open);

  const DrawerList = (
    <Box sx={{ width: 250 }}  onClick={toggleDrawer(false)}>
      <List>
        {role === "user"
          ? userLinks?.map((text) => (
              <ListItem key={text.title} disablePadding>
                <ListItemButton component={Link} to={text.linkTo}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))
          : adminLinks?.map((text) => (
              <ListItem key={text.title} disablePadding>
                <ListItemButton component={Link} to={text.linkTo}>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};