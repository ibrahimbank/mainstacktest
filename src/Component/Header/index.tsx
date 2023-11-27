import { Box, Stack } from "@mui/material";
import { LineChart } from "@/src/Component/Chartcomponent";
import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { transactionsInterface } from "@/src/api/types.tscomponent";

interface WalletInterface {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

const Header = ({
  wallet,
  transactions,
}: {
  wallet: WalletInterface;
  transactions: transactionsInterface;
}) => {
  const walletData = [
    {
      name: "Ledger Balance",
      price: wallet?.ledger_balance,
    },
    {
      name: "Total Payout",
      price: wallet?.total_payout,
    },
    {
      name: "Total Revenue",
      price: wallet?.total_revenue,
    },
    {
      name: "Pending Payout",
      price: wallet?.pending_payout,
    },
  ];
  return (
    <Stack direction={"row"} spacing={4}>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        pt={"10rem"}
        height={"100%"}
      >
        <img src="/asset/images/app%20bar.png" alt={"side bar"} />
      </Stack>

      <Box
        style={{
          width: "100%",
        }}
      >
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          width={"100%"}
          sx={{
            padding: "5rem 0rem",
          }}
        >
          <Stack width={"100%"}>
            <LineChart wallet={wallet} transactions={transactions} />
          </Stack>
          <Stack
            sx={{
              width: { xs: "100%", lg: "50%" },
            }}
            spacing={4}
          >
            {React.Children.toArray(
              walletData.map((item, id) => (
                <Stack
                  width={"100%"}
                  spacing={2}
                  data-walletId={`wallet-data-${id + 1}`}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems="center"
                    pr={12}
                    width={"100%"}
                  >
                    <p
                      style={{
                        color: "#888F95",
                        fontWeight: 500,
                        fontSize: "14px",
                      }}
                    >
                      {item?.name}
                    </p>{" "}
                    <ErrorOutlineIcon
                      sx={{
                        color: "#888F95",
                        fontSize: "20px",
                      }}
                    />
                  </Stack>
                  <h4
                    style={{
                      color: "#131316",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "28px",
                      letterSpacing: "-1.5px",
                      margin: "10px 0px 0px",
                    }}
                  >
                    USD {item?.price}
                  </h4>
                </Stack>
              ))
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Header;
