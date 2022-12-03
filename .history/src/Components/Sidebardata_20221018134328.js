import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
export const Sidebardata = [
  {
    title: "",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "",
    icon: <ShoppingCartIcon />,
    link: "/packages",
  },
  {
    title: "Legend",
    icon: <LegendToggleIcon />,
    link: "/summary",
  },
  {
    title: "",
    icon: <AssistantPhotoIcon />,
    link: "/result",
  },
  {
    title: "",
    icon: <ManageSearchIcon />,
    link: "/search",
  },
  {
    title: "",
    icon: <LiveHelpIcon />,
    link: "/help",
  },
];
