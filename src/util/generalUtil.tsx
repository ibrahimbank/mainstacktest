import ArrowBackIosOutlined from "@mui/icons-material/ArrowBackIosOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";

export function mergeObjectsFromArray(
  arr: {
    [key: string]: unknown;
  }[]
) {
  const mergedObject: {
    [key: string]: unknown;
  } = {};
  for (const obj of arr) {
    const [key, value] = Object.entries(obj)[0];
    mergedObject[key] = value;
  }

  return mergedObject;
}

export const convertToDetails = (
  originalDetails: {
    [key: string]: string;
  }[]
) => {
  if (!originalDetails || !Array.isArray(originalDetails)) {
    return {};
  }
  return originalDetails?.reduce((result, { name, value }) => {
    const key = name
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
    result[key] = value;
    return result;
  }, {});
};

export const Back = ({ link }: { link: string }) => {
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIosOutlined />}
      LinkComponent={Link}
      sx={{
        borderRadius: "8px",
        border: "1px solid var(--primary-main, #001662)",
        background: "var(--common-white, #FDFDFD)",
        ml: "auto",
      }}
      href={link}
    >
      {"Back"}
    </Button>
  );
};

export const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
