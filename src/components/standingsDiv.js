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
import gameData from './gameData.json';

export default function Standings() {
  const standingsByDivision = {};

  gameData.standings.forEach(team => {
    const divisionKey = `${team.conference}-${team.division}`;
    if (!standingsByDivision[divisionKey]) {
      standingsByDivision[divisionKey] = [];
    }
    standingsByDivision[divisionKey].push(team);
  });

  for (const divisionKey in standingsByDivision) {
    standingsByDivision[divisionKey].sort((a, b) => a.divisionRank - b.divisionRank);
  }

  return (
    <div>
      {Object.keys(standingsByDivision).map(divisionKey => (
        <TableContainer component={Paper} key={divisionKey}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={5} align="center">{standingsByDivision[divisionKey][0].division}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ width: '1%' }}></TableCell>
                <TableCell sx={{ width: '26%' }}>Team</TableCell>
                <TableCell sx={{ width: '26%' }}>W-L</TableCell>
                <TableCell sx={{ width: '26%' }}>Pct</TableCell>
                <TableCell sx={{ width: '26%' }}>GB</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {standingsByDivision[divisionKey].map(team => (
                <TableRow key={team.teamAbbreviation}>
                  <TableCell>{team.divisionRank}</TableCell>
                  <TableCell>{team.teamAbbreviation}</TableCell>
                  <TableCell>{`${team.wins}-${team.losses}`}</TableCell>
                  <TableCell>{team.winPct}</TableCell>
                  <TableCell>{team.divisionGamesBack}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}
