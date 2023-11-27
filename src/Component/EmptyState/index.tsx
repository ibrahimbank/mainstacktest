import { Box, Stack } from "@mui/material";
import { BorderButton, NoBorderButton } from "@/src/Component/Button";
import React from "react";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";

export const EmptyState = () => {
  return (
    <Stack
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"400px"}
      spacing={2}
    >
      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"400px"}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            background:
              "linear-gradient(135deg, #DBDEE5 1.89%, #F6F7F9 98.77%)",
          }}
        >
          <ReceiptLongOutlinedIcon />
        </Box>
      </Stack>
      <h4
        style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "40px",
          letterSpacing: "-0.6px",
          width: "400px",
          textAlign: "justify",
        }}
      >
        No matching transaction found for the selected filter
      </h4>
      <p
        style={{
          width: "400px",
          textAlign: "justify",
          color: "#56616B",
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          letterSpacing: "-0.2px",
        }}
      >
        Change your filters to see more results, or add a new product.
      </p>

      <Stack
        direction={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        width={"400px"}
      >
        <NoBorderButton
          fontSize={"16px"}
          padding={"12px 24px"}
          width={"50%"}
          height={"60px"}
          text={"Clear Filter"}
          color={"#131316"}
          disable={false}
        />
      </Stack>
    </Stack>
  );
};
