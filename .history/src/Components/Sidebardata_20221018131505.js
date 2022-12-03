import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
export const Sidebardata = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "ShoppingCart",
    icon: <ShoppingCartIcon />,
    link: "/packages",
  },
  {
    title: "LegendToggle",
    icon: <LegendToggleIcon />,
    link: "/summary",
  },
  {
    title: "AssistantPhoto",
    icon: <AssistantPhotoIcon />,
    link: "/result",
  },
  {
    title: "Ma",
    icon: <ManageSearchIcon />,
    link: "/search",
  },
  {
    title: "Li",
    icon: <LiveHelpIcon />,
    link: "/help",
  },
];
