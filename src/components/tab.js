'use client'

import * as React from 'react';
import {
  Box,
  Tab
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';
import DenseTable from './table';

import StandingsTabs from './standingsTab';

export default function BasicTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={"game"} value="1" />
            <Tab label={"standings"} value="2" />

          </TabList>
        </Box>
        <TabPanel value="1"><DenseTable /></TabPanel>
        <TabPanel value="2"><StandingsTabs /></TabPanel>

      </TabContext>
    </Box>
  );
}