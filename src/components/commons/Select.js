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
    setShowPreferences,
    name,
  } = props;
  const handleChange = (event, values) => {
    setSearchValues({
      ...searchValues,
      [name]: values,
    });
    // setShowPreferences(false)
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
        getOptionLabel={(option) => option?.city_name ?? option?.title}
        value={searchValues[name]}
        onChange={handleChange}
        renderOption={(props, option, { selected }) => {
          // Destructure key from props to avoid React warning
          const { key, ...rest } = props;

          return (
            <li key={key} {...rest}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.city_name??option.title}
            </li>
          );
        }}
        sx={{ width: { xs: '100%', sm: 500 } }}
        renderInput={(params) => (
          <TextField {...params} placeholder={placeholder} />
        )}
        classes={{
          groupLabel: 'custom-group-label', // Your custom styling hook
        }}
      />
    </>
  );
}
