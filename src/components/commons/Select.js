import React from "react";
import { Autocomplete, Checkbox, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CommonSelect(props) {
  const {
    labelSelect,
    options,
    placeholder,
    searchValues,
    setSearchValues,
    name,
  } = props;
  const handleChange = (event, values) => {
    setSearchValues({
      ...searchValues,
      [name]: values,
    });
  };
  return (
    <>
      {labelSelect && (
        <Typography
          fontSize={{ xs: "12px", sm: "15px" }}
          fontWeight={500}
          mb={"2px"}
        >
          {labelSelect}
        </Typography>
      )}
      <Autocomplete
        multiple
        options={options}
        disableCloseOnSelect
        groupBy={(option) => option?.groupName}
        getOptionLabel={(option) => option?.title}
        value={searchValues[name]}
        onChange={handleChange}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        sx={{ width: { xs: "-webkit-fill-available", sm: 500 } }}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
        )}
        classes={{
          groupLabel: 'custom-group-label', // Apply your custom class here
        }}
      />
    </>
  );
}
