import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Checkbox, InputAdornment, SelectChangeEvent } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface CustomMultiSelectTextFieldProps {
  options: string[];
  onClick?: () => void;
  selected?: string[];
  setSelected?: React.Dispatch<React.SetStateAction<string[]>>;
}
export const CustomMultiSelectTextField: React.FC<
  CustomMultiSelectTextFieldProps
> = ({ options, onClick, selected, setSelected }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    if (setSelected) {
      setSelected(typeof value === "string" ? value.split(",") : value);
    }
  };

  const handleOptionToggle = (option: string) => () => {
    const currentIndex = selectedOptions.indexOf(option);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(option);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  return (
    <TextField
      select
      value={selected}
      onChange={handleChange}
      onClick={onClick}
      variant="outlined"
      fullWidth
      sx={{
        borderRadius: "12px",
        border: "3px solid #131316",
      }}
      SelectProps={{
        multiple: true,
      }}
    >
      {options.map((option: string) => (
        <MenuItem
          key={option}
          value={option?.toLowerCase()}
          onClick={handleOptionToggle(option)}
        >
          <Checkbox checked={selectedOptions.indexOf(option) !== -1} />
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

interface CustomDateInputProps {
  value: Date;
  onChange: (date: Date) => void;
  onClick?: () => void;
}

export const CustomDateInput: React.FC<CustomDateInputProps> = ({
  value,
  onChange,
  onClick,
}) => {
  // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   onChange(event.target.value);
  // };

  const handleIconClick = () => {
    // Open the date picker
    if (datepickerRef.current) {
      datepickerRef.current.setOpen(true);
    }
  };

  const datepickerRef = React.useRef<DatePicker>(null);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        border: "1px solid #EFF1F6",
        background: "#EFF1F6",
        width: "100%",
      }}
      onClick={onClick}
    >
      <DatePicker
        selected={value}
        onChange={(date: any) => onChange(date as Date)}
        dateFormat="MM/dd/yyyy"
        customInput={
          <TextField
            variant="outlined"
            fullWidth
            InputProps={{
              sx: {
                borderRadius: "0px",
                border: "0px solid inherit !important",
                background: "inherit",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "0px",
                },
              },
            }}
          />
        }
        ref={datepickerRef}
        popperPlacement="bottom-end"
        popperModifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
        ]}
      />
      <InputAdornment
        position="end"
        sx={{
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        }}
      >
        <KeyboardArrowDownIcon onClick={handleIconClick} />
      </InputAdornment>
    </div>
  );
};
