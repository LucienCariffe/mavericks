import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';



export default function RanksTable({ selectedTeamData }) {

  return (
    <Paper sx={{ height: '100%', overflow: 'hidden' }}>
      <TableContainer >
        <Table sx={{ minWidth: 0 }} size="large" aria-label="team stats table">
          <TableHead>
            <TableRow>
              <TableCell>Stats</TableCell>
              <TableCell>Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow >
              <TableCell component="th" scope="row">
                <div> Off RTG</div>
                {selectedTeamData['OFF RTG']}
              </TableCell>
              <TableCell>{selectedTeamData['OFF RTG_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div> EFG</div>
                {selectedTeamData['EFG%']}
              </TableCell>
              <TableCell>{selectedTeamData['EFG%_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div> TURNOVERS</div>
                {selectedTeamData['TURNOVERS']}
              </TableCell>
              <TableCell>{selectedTeamData['TURNOVERS_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div> OFF REB%</div>
                {selectedTeamData['OFF REB%']}
              </TableCell>
              <TableCell>{selectedTeamData['OFF REB%_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div> FTA </div>
                {selectedTeamData['FTA']}
              </TableCell>
              <TableCell>{selectedTeamData['FTA_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div>DEF RTG</div>
                {selectedTeamData['DEF RTG']}
              </TableCell>
              <TableCell>{selectedTeamData['DEF RTG_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div>OPP. EFG%</div>
                {selectedTeamData['OPP. EFG%']}
              </TableCell>
              <TableCell>{selectedTeamData['OPP. EFG_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div>TURNOVERS FORCED</div>
                {selectedTeamData['TURNOVERS FORCED']}
              </TableCell>
              <TableCell>{selectedTeamData['TURNOVERS FORCED_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div>DEF REB%</div>
                {selectedTeamData['DEF REB%']}
              </TableCell>
              <TableCell>{selectedTeamData['DEF REB_rank']}</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <div>FTA ALLOWED</div>
                {selectedTeamData['FTA ALLOWED']}
              </TableCell>
              <TableCell>{selectedTeamData['FTA ALLOWED_rank']}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}