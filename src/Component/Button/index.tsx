import { Button } from "@mui/material";

export const OutlinedButton = ({
  width,
  height,
  text,
  disable = false,
  fontSize,
}: {
  width: string;
  height: string;
  text: string;
  disable: boolean;
  fontSize: string;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "100px",
        background: disable ? "#DBDEE5" : "#131316",
        width: width,
        color: "#fff",
        height: `${height} !important`,
        fontSize: `${fontSize} !important`,
        textTransform: "capitalize",
        "&:hover": {
          background: "#131316",
        },
      }}
      disabled={disable}
    >
      {text}
    </Button>
  );
};

export const BorderButton = ({
  width,
  fontSize,
  fontWeight,
  padding,
  text,
  disable = false,
  height,
  onClick,
  color,
  background,
}: {
  width: string;
  height: string;
  fontWeight?: string;
  padding?: string;
  fontSize?: string;
  text: string;
  disable: boolean;
  onClick?: () => void;
  color?: string;
  background?: string;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: padding,
        background: disable ? "#DBDEE5" : background ? background : "#fff",
        width: width,
        height: height,
        color: disable ? "#fff" : color ? color : "#131316",
        border: "1px solid #EFF1F6",
        fontSize: `${fontSize} !important`,
        fontWeight: `${fontWeight} !important`,
        "&:hover": {
          background: disable ? "#DBDEE5" : background ? background : "#fff",
          color: disable ? "#fff" : color ? color : "#131316",
        },
      }}
      disabled={disable}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const NoBorderButton = ({
  width,
  fontSize,
  fontWeight,
  padding,
  text,
  disable = false,
  height,
  onClick,
  color,
}: {
  width: string;
  height: string;
  fontWeight?: string;
  padding?: string;
  fontSize?: string;
  text: string;
  disable: boolean;
  onClick?: () => void;
  color?: string;
}) => {
  return (
    <Button
      sx={{
        borderRadius: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: padding,
        background: "#DBDEE5",
        width: width,
        height: height,
        color: disable ? "#fff" : "#131316",
        border: "none",
        fontSize: `${fontSize} !important`,
        fontWeight: `${fontWeight} !important`,
      }}
      disabled={disable}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export const IconButton = ({
  width,
  text,
  height,
  fontSize,
  disable = false,
  icon,
  onClick,
  filter,
  number,
}: {
  width: string;
  fontSize: string;
  text: string;
  disable: boolean;
  icon: any;
  height: string;
  onClick?: () => void;
  filter?: boolean;
  number?: number;
}) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        gap: "10px",
        borderRadius: "100px",
        background: "#EFF1F6",
        width: width,
        height: height,
        fontSize: `${fontSize} !important`,
        color: "#131316",
      }}
      disabled={disable}
      onClick={onClick}
    >
      {text}{" "}
      {filter && (
        <span
          style={{
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "25px",
            height: "25px",
            padding: "0.5rem",
            backgroundColor: "#131316",
            color: "#fff",
          }}
        >
          {number}
        </span>
      )}{" "}
      {icon}
    </Button>
  );
};
