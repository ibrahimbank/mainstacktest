import { Box, Stack } from "@mui/material";
import { Chart } from "@/src/util/generalUtil.tsxcomponent";
import { ApexOptions } from "apexcharts";
import { OutlinedButton } from "@/src/Component/Buttoncomponent";
import moment from "moment";

export const LineChart = ({ wallet, transactions }) => {
  const statusSeries = [
    {
      name: "Amount",
      data: transactions?.map((trans) => trans?.amount),
    },
  ];

  const StatusOptions: ApexOptions = {
    stroke: {
      width: [3, 5],
      curve: "smooth",
    },

    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    markers: {
      hover: {
        sizeOffset: 2,
      },
      shape: "circle",
      size: 0,
      strokeWidth: 3,
      strokeOpacity: 1,
    },
    colors: ["#FF5403"],
    fill: {
      opacity: 1,
    },
    labels: transactions?.map((trans) =>
      moment(trans?.date).format("MMM Do YYYY")
    ),
    dataLabels: {
      enabled: false,
    },
    grid: {
      strokeDashArray: 5,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 6,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
  };
  return (
    <Box>
      <Stack direction={"row"} alignItems={"center"} spacing={6}>
        <Stack spacing={1}>
          <p>Available Balance</p>
          <h4
            style={{
              color: "#131316",
              fontSize: "26px",
              fontWeight: 700,
              lineHeight: "48px",
              letterSpacing: "-1.5px",
            }}
          >
            USD {wallet?.balance}
          </h4>
        </Stack>

        <OutlinedButton
          width={"15%"}
          text={"Withdraw"}
          disable={false}
          height={"40px"}
          fontSize={"14px"}
        />
      </Stack>
      <Chart
        options={StatusOptions}
        series={statusSeries}
        type="line"
        height={343}
      />
    </Box>
  );
};
