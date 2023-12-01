import React, { useState } from "react";
//import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Filters.module.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// Filters.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Filters({
  filters,
  selectedfilterIndex,
  setSelectedfilterIndex,
}) {
  const handleChange = (event, newValue) => {
    setSelectedfilterIndex(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedfilterIndex}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          style: { backgroundColor: "var(--color-primary)" },
        }}
      >
        {filters.map((ele, index) => (
          <Tab className={styles.tab} label={ele.label} {...a11yProps(0)} />
        ))}
      </Tabs>
      {filters.map((ele, idx) => (
        <TabPanel value={ele.label} index={idx} />
      ))}
    </div>
  );
}
