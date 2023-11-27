import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Avatar, Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import Link from "next/link";

const MainWrapper = styled(Box)(
  ({ theme }) => `
border-radius: 100px;
border: 2px solid  #FFF;
background: #FFF;
box-shadow: 0px 2px 4px 0px rgba(45, 59, 67, 0.05), 0px 2px 6px 0px rgba(45, 59, 67, 0.06);
padding: 14px 24px;
display: flex;
align-items: center;
justify-content: space-between;

`
);

const AvatarWrapper = styled(Avatar)(
  ({ theme }) => `
border-radius: 100%;
background: linear-gradient(139deg, #5C6670 2.33%, #131316 96.28%);
display: flex;
alignItems: center;
justifyContent: center;
font-size: 12px;
`
);

export const AppButton = styled(Button)(() => ({
  border: "none",
  color: "white",
  padding: "1rem",
  cursor: "pointer",
  transform: "capitalized",
}));

interface User {
  first_name: string;
  last_name: string;
  email: string;
}
const Nav = ({ user }: { user: User }) => {
  return (
    <MainWrapper data-navid={"navbar"}>
      <Stack
        direction="row"
        spacing={1}
        width="100%"
        justifyContent={"flex-start"}
      >
        <img src={"/asset/images/mainstack-logo.png"} alt={"logo"} />
      </Stack>

      <Box
        component={"nav"}
        sx={{
          width: "100%",
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          gap: "10px",
        }}
      >
        {React.Children.toArray(
          links.map((link, id) => (
            <AppButton
              sx={{
                width: "fit-content",
                background: "inherit",
                color: "#56616B",
                fontWeight: 600,
                display: "flex",
                flexDirection: "row",
                alignItems: "center !important",
                gap: "5px",
                fontSize: "14px !important",
                textTransform: "capitalize",
                "&:hover": {
                  background: "#131316",
                  color: "#fff",
                  borderRadius: "100px",
                },
              }}
              data-navtitleId={`navbar-titleId-${id + 1}`}
              href={link.link}
              LinkComponent={Link}
            >
              {link.icon} {link.name}
            </AppButton>
          ))
        )}
      </Box>

      <Stack
        direction="row"
        spacing={4}
        width="100%"
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <NotificationsNoneOutlinedIcon
          width={"20px"}
          height={"20px"}
          sx={{
            color: "#56616B",
          }}
        />
        <ChatOutlinedIcon
          width={"20px"}
          height={"20px"}
          sx={{
            color: "#56616B",
          }}
        />
        <Box
          style={{
            display: "flex",
            background: "#EFF1F6",
            borderRadius: "100px",
            padding: "4px 12px 4px 5px",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AvatarWrapper
            sx={{
              padding: "1rem !important",
              display: "flex !important",
              flexDirection: "row",
            }}
          >
            <p> {user?.first_name.charAt(0)}</p>{" "}
            <p>{user?.last_name.charAt(0)}</p>
          </AvatarWrapper>
          <MenuOutlinedIcon
            sx={{
              color: "#56616B",
              cursor: "pointer",
            }}
          />
        </Box>
      </Stack>
    </MainWrapper>
  );
};

const links = [
  {
    name: "Home",
    icon: <HomeOutlinedIcon sx={{ fontSize: "16px !important" }} />,
    link: "",
  },
  {
    name: "Analytics",
    icon: (
      <InsertChartOutlinedRoundedIcon sx={{ fontSize: "16px !important" }} />
    ),
    link: "",
  },
  {
    name: "Revenue",
    icon: <PaymentsOutlinedIcon sx={{ fontSize: "16px !important" }} />,
    link: "",
  },
  {
    name: "CRM",
    icon: <PeopleOutlineOutlinedIcon sx={{ fontSize: "16px !important" }} />,
    link: "",
  },
  {
    name: "Apps",
    icon: <DashboardOutlinedIcon sx={{ fontSize: "16px !important" }} />,
    link: "",
  },
];

export default Nav;
