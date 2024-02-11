import React from 'react';
import {
  Modal,
  Box,
  Tab,
  IconButton,
  Typography
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';
import CloseIcon from '@mui/icons-material/Close';
import PlayerStatsTable from './playerStats';
import gameData from './gameData.json'
import RanksTable from './teamRanks';







export default function TeamModal({ isOpen, handleClose, selectedTeam }) {
  const selectedTeamData = gameData.teamRanks.find((team) => team.team === selectedTeam);
  const selectedTeamPlayer = gameData.playerStats.filter((player) => player.team === selectedTeam);


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
          width: '80%',
          height: '80%',
          overflow: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Box>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <IconButton
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Typography variant="h6" gutterBottom>
                  {selectedTeam} 2023 - 2024
                </Typography>
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
