import React from "react";
import { useState } from "react";

import {
  Box,
  IconButton,
  Tooltip,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationPanel = (props) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [count, setCount] = useState(props.notifications.length);
  const handleCloseNotificationMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};



  return (
    <Box alignItems={"center"}>
      <Tooltip title="notifications">
        <IconButton onClick={handleOpenUserMenu} >
          {/* <Badge
            color="primary"
            overlap="circular"
            badgeContent="0"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <NotificationsIcon
              sx={{ color: "text.primary", fontSize: "2rem" }}
            />
          </Badge> */}
          <Badge color="primary" badgeContent={count} overlap="circular" >
          <NotificationsIcon sx={{ color: "text.primary", fontSize: "2rem" }}/>
        </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseNotificationMenu}
      >
        {props.notifications.map((item) => (
          <MenuItem
          key={item.title}
          // onClick={handleCloseUserMenu}
          // component={setting.name === "My Profile" ? Link : ""}
          // sx={{ display: setting.name === "My Profile" ? { xs: "none", md: "block" } : "block" }}
          // to={setting.path}
          >
            <Typography textAlign="center">{item.title}</Typography>
            <Typography textAlign="center">{item.description}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NotificationPanel;
