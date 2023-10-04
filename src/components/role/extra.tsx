import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

interface GroupedOption {
  group: string;
  value: string;
  label: string;
}

const options: GroupedOption[] = [
  { group: "Group 1", value: "option1", label: "Option 1" },
  { group: "Group 1", value: "option2", label: "Option 2" },
  { group: "Group 2", value: "option3", label: "Option 3" },
  { group: "Group 2", value: "option4", label: "Option 4" },
];

const GroupedMultipleSelect: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValues(event.target.value as string[]);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Select Options</InputLabel>
        <Select
          multiple
          value={selectedValues}
          // @ts-ignore
          onChange={handleSelectChange}
          label="Select Options"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box mt={2}>
        <strong>Selected Options:</strong> {selectedValues.join(", ")}
      </Box>
    </div>
  );
};

export default GroupedMultipleSelect;
