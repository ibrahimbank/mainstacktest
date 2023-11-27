import {
  Box,
  Dialog,
  Divider,
  Stack,
  styled,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { BorderButton, IconButton } from "@/src/Component/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import SouthWestIcon from "@mui/icons-material/SouthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import {
  CustomDateInput,
  CustomMultiSelectTextField,
} from "@/src/Component/SelectInput";
import moment from "moment";
import {
  filterByDateRange,
  filterBySelectedTypes,
  last7DaysData,
  lastThreeMonthsData,
  thisMonthData,
  todayData,
} from "../../util/filterUtil";
import { EmptyState } from "@/src/Component/EmptyState";
import { transactionsInterface } from "@/src/api/types";
import { useMediaQuery } from "react-responsive";

const MenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiPaper-root:{
     border-radius: 20px 20px 0px 0px !important;
        .MuiDialog:{
            paper:{
                border-radius: 20px 20px 0px 0px !important;
                border: 2px solid  #FFF;
                background: rgba(255, 255, 255, 0.90);
                backdrop-filter: blur(8px);
           }
        }
    }
    `
);

const SuccessWrapper = styled(Box)(
  ({ theme }) => `

border-radius: 100%;
padding: 14px 14px;
`
);

const PendingWrapper = styled(Box)(
  ({ theme }) => `
background:  #F9E3E0;
border-radius: 100%;
padding: 14px 14px;
`
);

const TransactionDisplay = ({
  transactions,
}: {
  transactions: transactionsInterface[];
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const options = [
    "Store Transactions",
    "Get Tipped ",
    "Withdrawal",
    "Chargebacks",
    "Cashbacks",
    "Refer & Earn",
    "Deposit",
  ];
  const isPhone = useMediaQuery({ query: "(max-width: 765px)" });

  const status = ["Successful", "Pending", "Failed"];

  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [filterOptions, setFilterOptions] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const [selected, setSelected] = React.useState<string[]>([]);
  const [selectedType, setSelectedType] = React.useState<string[]>([]);

  return (
    <Stack spacing={2} p={{ xs: "0 1rem", lg: "0rem 5rem" }}>
      <MenuWrapper>
        <Dialog
          open={open}
          maxWidth={"sm"}
          fullWidth
          onClose={() => {
            setOpen(false);
          }}
          sx={{
            ".MuiPaper-root": {
              borderRadius: "20px !important",
              border: "2px solid  #FFF",
            },
          }}
        >
          <DialogTitle>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography
                variant={"h3"}
                sx={{
                  color: "#131316",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "120%",
                  textTransform: "capitalize",
                }}
              >
                Filter
              </Typography>

              <CloseIcon
                sx={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </Stack>
          </DialogTitle>
          <DialogContent>
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={"100%"}
              spacing={2}
              mt={"1rem"}
            >
              {React.Children.toArray(
                [
                  {
                    text: "Today",
                    event: todayData,
                    option: "today",
                  },
                  {
                    text: "Last 7 days",
                    event: last7DaysData,
                    option: "7days",
                  },
                  {
                    text: "This month",
                    event: thisMonthData,
                    option: "thismonth",
                  },
                  {
                    text: "Last 3 months",
                    event: lastThreeMonthsData,
                    option: "3month",
                  },
                ].map((btn) => (
                  <BorderButton
                    width={"100%"}
                    height={"40px"}
                    text={btn.text}
                    disable={false}
                    fontSize={"12px"}
                    fontWeight={"600"}
                    background={
                      filterOptions === btn?.option ? "#131316" : "auto"
                    }
                    color={filterOptions === btn?.option ? "#fff" : "#131316"}
                    onClick={() => {
                      setFilterOptions(btn?.option);
                    }}
                  />
                ))
              )}
            </Stack>

            <Stack width={"100%"} spacing={2} mt={"4rem"}>
              <Typography
                variant={"h3"}
                sx={{
                  color: "#131316",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textTransform: "capitalize",
                }}
              >
                Date Range
              </Typography>
              <Stack
                direction={"row"}
                width={"100%"}
                alignItems={"center"}
                spacing={2}
              >
                <CustomDateInput
                  value={selectedDate}
                  onChange={setSelectedDate}
                  onClick={() => {
                    setFilterOptions("date");
                  }}
                />
                <CustomDateInput
                  value={endDate}
                  onChange={setEndDate}
                  onClick={() => {
                    setFilterOptions("date");
                  }}
                />
              </Stack>
            </Stack>
            <Stack width={"100%"} spacing={2} mt={"4rem"}>
              <Typography
                variant={"h3"}
                sx={{
                  color: "#131316",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textTransform: "capitalize",
                }}
              >
                Transaction Type
              </Typography>

              <CustomMultiSelectTextField
                options={options}
                selected={selectedType}
                setSelected={setSelectedType}
                onClick={() => {
                  setFilterOptions("transType");
                }}
              />
            </Stack>
            <Stack width={"100%"} spacing={2} mt={"4rem"}>
              <Typography
                variant={"h3"}
                sx={{
                  color: "#131316",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textTransform: "capitalize",
                }}
              >
                Transaction Status
              </Typography>

              <CustomMultiSelectTextField
                options={status}
                selected={selected}
                setSelected={setSelected}
                onClick={() => {
                  setFilterOptions("status");
                }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={"100%"}
              spacing={2}
              mt={"4rem"}
            >
              <BorderButton
                fontSize={"16px"}
                padding={"12px 24px"}
                width={"100%"}
                height={"50px"}
                text={"Clear"}
                disable={false}
                onClick={() => {
                  setFilteredData([]);
                  setFilterOptions("");
                }}
              />
              <BorderButton
                fontSize={"16px"}
                padding={"12px 24px"}
                width={"100%"}
                height={"50px"}
                text={"Apply"}
                disable={filterOptions === ""}
                background={filterOptions !== "" ? "#131316" : "auto"}
                color={filterOptions !== "" ? "#fff" : "#131316"}
                onClick={() => {
                  if (filterOptions === "transType") {
                    filterBySelectedTypes(
                      transactions,
                      selectedType,
                      setFilteredData,
                      setFilterOptions,
                      "type",
                      setOpen,
                      setSelectedType
                    );
                  }
                  if (filterOptions === "status") {
                    filterBySelectedTypes(
                      transactions,
                      selected,
                      setFilteredData,
                      setFilterOptions,
                      "status",
                      setOpen,
                      setSelected
                    );
                  }

                  if (filterOptions === "date") {
                    filterByDateRange(
                      transactions,
                      selectedDate,
                      endDate,
                      setFilteredData,
                      setFilterOptions,
                      setOpen
                    );
                  }
                  if (filterOptions === "today") {
                    todayData(
                      transactions,
                      setFilteredData,
                      setFilterOptions,
                      setOpen
                    );
                  }

                  if (filterOptions === "7days") {
                    last7DaysData(
                      transactions,
                      setFilteredData,
                      setFilterOptions,
                      setOpen
                    );
                  }
                  if (filterOptions === "3month") {
                    lastThreeMonthsData(
                      transactions,
                      setFilteredData,
                      setFilterOptions,
                      setOpen
                    );
                  }
                  if (filterOptions === "thismonth") {
                    thisMonthData(
                      transactions,
                      setFilteredData,
                      setFilterOptions,
                      setOpen
                    );
                  }
                }}
              />
            </Stack>
          </DialogActions>
        </Dialog>
      </MenuWrapper>

      <Stack
        direction={{ xs: "column", lg: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        style={{ margin: "0px 0px 33px 0px" }}
        spacing={{ xs: 2, lg: 0 }}
      >
        <Stack spacing={1} width={"100%"}>
          <h4
            style={{
              color: "#131316",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
              letterSpacing: "-0.6px",
            }}
          >
            {filterOptions !== "" ? filteredData?.length : transactions?.length}{" "}
            Transactions
          </h4>
          <p>
            Your transactions{" "}
            {filterOptions === "for the last 7days"
              ? "7days"
              : filterOptions === "3month"
              ? "for the last 3 months"
              : filterOptions === "today"
              ? "for Today"
              : filterOptions === "thismonth"
              ? "for the this month"
              : "for All time"}
          </p>
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          width={"100%"}
          justifyContent={{ xs: "flex-start", lg: "flex-end" }}
        >
          <IconButton
            width={isPhone ? "100%" : "25%"}
            text={"Filter"}
            onClick={() => {
              setOpen(true);
            }}
            disable={false}
            icon={<KeyboardArrowDownIcon sx={{ fontSize: "14px" }} />}
            height={"40px"}
            fontSize={"12px"}
            filter={filteredData?.length !== 0}
            number={filteredData?.length === 0 ? 0 : filteredData?.length}
          />
          <IconButton
            width={isPhone ? "100%" : "30%"}
            text={"Export list"}
            disable={false}
            icon={<SaveAltIcon sx={{ fontSize: "14px" }} />}
            height={"40px"}
            fontSize={"12px"}
          />
        </Stack>
      </Stack>

      <Divider />

      {filteredData?.length === 0 && filterOptions !== "" ? (
        <EmptyState
          setFilterOptions={
            setFilterOptions as React.Dispatch<React.SetStateAction<string>>
          }
          setFilteredData={
            setFilteredData as React.Dispatch<
              React.SetStateAction<transactionsInterface[]>
            >
          }
        />
      ) : (
        <Stack spacing={3} style={{ margin: "32px 0px" }} width={"100%"}>
          {React.Children.toArray(
            (filteredData?.length !== 0 ? filteredData : transactions)?.map(
              (item, id) => (
                <Stack
                  direction={"row"}
                  spacing={2}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  data-transactionId={`transaction-data-${id + 1}`}
                >
                  <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <SuccessWrapper
                      sx={{
                        background:
                          item?.type.toLowerCase() === "withdrawal"
                            ? "#F9E3E0"
                            : "#E3FCF2",
                      }}
                    >
                      {item?.type.toLowerCase() === "withdrawal" ? (
                        <NorthEastIcon fontSize={"medium"} />
                      ) : (
                        <SouthWestIcon fontSize={"medium"} />
                      )}
                    </SuccessWrapper>
                    <Stack spacing={1}>
                      <p
                        style={{
                          fontSize: isPhone ? "14px" : "auto",
                        }}
                      >
                        {item?.metadata?.product_name}{" "}
                      </p>
                      {item?.type.toLowerCase() === "withdrawal" ? (
                        <p
                          style={{
                            color:
                              item?.status.toLowerCase() === "successful"
                                ? "#0EA163"
                                : "#A77A07",
                            fontSize: isPhone ? "12px" : "auto",
                          }}
                        >
                          {item?.status}
                        </p>
                      ) : (
                        <p
                          style={{
                            fontSize: isPhone ? "12px" : "auto",
                          }}
                        >
                          {item?.metadata?.name}
                        </p>
                      )}
                    </Stack>
                  </Stack>

                  <Stack
                    spacing={1}
                    alignItems={{ xs: "center", md: "flex-end" }}
                  >
                    <h4
                      style={{
                        fontSize: isPhone ? "12px" : "auto",
                      }}
                    >
                      USD {item?.amount}
                    </h4>
                    <p
                      style={{
                        fontSize: isPhone ? "12px" : "auto",
                      }}
                    >
                      {" "}
                      {moment(item?.date).format("MMM Do YYYY")}
                    </p>
                  </Stack>
                </Stack>
              )
            )
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default TransactionDisplay;
