import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  TableRow,
  Modal,
  Box,
  IconButton
} from '@mui/material';
import gameData from './gameData.json';
import CloseIcon from '@mui/icons-material/Close';



export default function PlaybyPlay({ isOpen, handleClosePlay, selectedPeriod, selectedID }) {

  const playByPlay = gameData.gamePlayByPlay.filter(item => item.period === selectedPeriod && item.nbaGameId === selectedID);


  return (
    <Modal open={isOpen} onClose={handleClosePlay}>
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
        <Typography variant="h6" gutterBottom>
          Period: {selectedPeriod}
        </Typography>
        <IconButton
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
          }}
          onClick={handleClosePlay}
        >
          <CloseIcon />
        </IconButton>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Team</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {playByPlay.map((play, index) => (
                <TableRow key={index}>
                  <TableCell>{play.team}</TableCell>
                  <TableCell>{play.gameClock}</TableCell>
                  <TableCell>{`${play.homeScore}-${play.awayScore}`}</TableCell>
                  <TableCell>{play.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}