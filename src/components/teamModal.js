import React from 'react';
import { Modal, Box } from '@mui/material';
import gameData from './gameData.json'
import RanksTable from './teamRanks';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PlayerStatsTable from './playerStats';





export default function TeamModal({ isOpen, handleClose, selectedTeam }) {
    const selectedTeamData = gameData.teamRanks.find((team) => team.team === selectedTeam);
    const selectedTeamPlayer = gameData.playerStats.filter((player) => player.team === selectedTeam);
    console.log(selectedTeamPlayer)
  
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (
      <Modal open={isOpen} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            height: '90%', 
            overflow: 'auto',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={"Team Ranks"} value="1" />
            <Tab label={"Player Stats"} value="2" />
            
          </TabList>
        </Box>
        <TabPanel value="1">
            <RanksTable
            selectedTeamData={selectedTeamData}
            />
            </TabPanel>
        <TabPanel value="2">
          
          <PlayerStatsTable
          selectedTeamPlayer={selectedTeamPlayer}
          />
          
        </TabPanel>
      </TabContext>
    </Box>
            
          </Box>
        </Box>
      </Modal>
    );
  }
  