'use client'

import * as React from 'react';
import {
  Tab,
  Box
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel,
} from '@mui/lab';
import Standings from './standingsConf';
import StandingsDiv from './standingsDiv';

export default function StandingsTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>

        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
          <Tab label={"Conf"} value="1" />
          <Tab label={"Division"} value="2" />

        </TabList>

        <TabPanel value="1"><Standings /></TabPanel>
        <TabPanel value="2"><StandingsDiv /></TabPanel>

      </TabContext>
    </Box>
  );
}