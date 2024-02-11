import React from 'react';
import {
    Modal,
    Box,
    Tab,
    Typography,
    IconButton,
} from '@mui/material';
import gameData from './gameData.json'
import {
    TabContext,
    TabList,
    TabPanel
} from '@mui/lab';
import PlayerScoresTable from './playerScores';
import TeamScores from './teamScores';
import CloseIcon from '@mui/icons-material/Close';






export default function GameModal({ isOpen, handleCloseScores, selectedID, selectedTeam }) {
    const selectedTeamScores = gameData.teamBoxScores.find((team) => team.team === selectedTeam && team.nbaGameId === selectedID);
    const selectedPlayerScores = gameData.playerBoxScores.filter((player) => player.team === selectedTeam && player.nbaGameId === selectedID);

    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
   
    
    const handleCloseModal = () => {
        handleCloseScores();
    };

    console.log(value)
    return (
        <Modal open={isOpen} onClose={handleCloseModal}>
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
                            onClick={handleCloseScores}
                        >
                            <CloseIcon />
                        </IconButton>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Typography variant="h6" gutterBottom>
                                    {selectedTeam} Box Score
                                </Typography>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label={"Team Stats"} value="1" />
                                    <Tab label={"Player Stats"} value="2" />
                                </TabList>
                            </Box>
                            
                            <TabPanel value="1">
                                {selectedTeamScores === undefined ? (
                                    <Typography variant="body1">
                                        Game has not started.
                                    </Typography>
                                ) : (
                                    <TeamScores
                                        selectedTeamScores={selectedTeamScores}
                                    />
                                )}
                            </TabPanel>

                            <TabPanel value="2">
                            {selectedTeamScores === undefined ? (
                                    <Typography variant="body1">
                                        Game has not started.
                                    </Typography>
                                ) : (
                                <PlayerScoresTable
                                    selectedPlayerScores={selectedPlayerScores}
                                />
                                )}
                            </TabPanel>
                        </TabContext>
                    </Box>

                </Box>
            </Box>
        </Modal>
    );
}
