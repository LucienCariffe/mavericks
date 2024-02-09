import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import { Modal } from '@mui/material';
import { Box } from '@mui/material';
import gameData from './gameData.json';



export default function PlaybyPlay({isOpen, handleClosePlay, selectedPeriod, selectedID}) {

  const playByPlay = gameData.gamePlayByPlay.filter(item => item.period === selectedPeriod && item.nbaGameId === selectedID);
  

  return (
    <Modal open={isOpen} onClose={handleClosePlay}>
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
            <Box sx={{ position: 'absolute', top: 0, left: 0, padding: 2 }}>
          Period: {selectedPeriod}
        </Box>
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