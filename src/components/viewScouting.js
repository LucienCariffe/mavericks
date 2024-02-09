import React from 'react';
import  { useState } from 'react';
import { Modal, Box, Typography, Table, TableBody,TableCell, Collapse,TableRow,TableContainer, TableHead } from '@mui/material';
import gameData from './gameData.json';
import {IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function ViewScouting({ isOpen, handleCloseScout,  selectedID }) {
    
    const scoutingReports = gameData.scoutingReports.filter((report) => report.nbaGameId === selectedID);
    const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index);

  }
  

    return (
        <Modal open={isOpen} onClose={handleCloseScout}>
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
            <IconButton
          sx={{
            position: 'absolute',
            top: 4,
            right: 4,
          }}
          onClick={handleCloseScout}
        >
          <CloseIcon />
        </IconButton>

            <Typography variant="h6" gutterBottom>
                    Scouting Reports
                </Typography>
                {scoutingReports.length === 0 ? (
          <Typography variant="body1">
            No scouting reports available for this game.
          </Typography>
        ) : (
            <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Player Name</TableCell>
                        <TableCell>Scout</TableCell>
                        <TableCell>Report</TableCell>
                    </TableRow>
                </TableHead>
    <TableBody>
      {scoutingReports.map((item, index) => (
        <React.Fragment key={item.name}>
          <TableRow onClick={() => handleRowClick(index)}>
            <TableCell>
              {item.name}
            </TableCell>
            <TableCell>
              {item.scout}
            </TableCell>
            <TableCell >
              <Collapse in={expandedRow === index} timeout="auto" unmountOnExit>
                <Typography>{item.report}</Typography>
              </Collapse>
             
                      {!expandedRow && (
                        <IconButton size="small" onClick={() => handleRowClick(index)}>
                          <MoreHorizIcon/>
                        </IconButton>
                      )}
              
            </TableCell>
          </TableRow>
        </React.Fragment>
      ))}
    </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Box>
        </Modal>
    );
};


