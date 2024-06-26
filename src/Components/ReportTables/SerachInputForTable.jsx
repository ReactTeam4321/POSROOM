import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Paper } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const SearchInputForTable = ({
    filterText,
    onFilter,
    sx,
    options,
    placeholder,
}) => {
    const [value, setValue] = useState(filterText || ""); // Initialize value with filterText or an empty string

    const handleInputChange = (event, newValue) => {
        setValue(newValue); // Update the value state
        onFilter(event, newValue); // Call the onFilter handler
    };

    // Convert options to an array of strings
    const stringOptions =
        options.length > 0 ? options.map((option) => option.toString()) : [];

    return (
        <Autocomplete
            freeSolo
            onInputChange={handleInputChange}
            id="search-field"
            disableClearable
            options={stringOptions} // Pass stringOptions instead of options
            value={value} // Use the value state
            sx={
                sx
                    ? sx
                    : {
                          width: "270px",
                          marginRight: "12px",
                          ".MuiInputBase-input": {
                              height: "15px !important",
                              borderRadius: "50px !important",
                              fontSize: "14px",
                          },
                      }
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder={placeholder}
                    size="small"
                    id="filled-hidden-label-small"
                    onChange={(event) => setValue(event.target.value)} // Update the value state
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        ...params.InputProps,
                        type: "search",
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        background: "white",
                    }}
                />
            )}
            PaperComponent={({ children }) => (
                <Paper
                    sx={{
                        fontWeight: "600 important",
                        fontFamily: "Poppins",
                        fontSize: "12px",
                    }}
                    elevation={3}
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                    }}
                >
                    {children}
                </Paper>
            )}
        />
    );
};

export default SearchInputForTable;