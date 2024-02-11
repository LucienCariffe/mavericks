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
  const eastStandings = gameData.standings.filter(team => team.conference === 'East').sort((a, b) => a.playoffRank - b.playoffRank);
  const westStandings = gameData.standings.filter(team => team.conference === 'West').sort((a, b) => a.playoffRank - b.playoffRank);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} align="center">East</TableCell>
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
            {eastStandings.map(team => (
              <TableRow key={team.teamAbbreviation}>
                <TableCell>{team.playoffRank}</TableCell>
                <TableCell>{team.teamAbbreviation}</TableCell>
                <TableCell>{`${team.wins}-${team.losses}`}</TableCell>
                <TableCell>{team.winPct}</TableCell>
                <TableCell>{team.conferenceGamesBack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell colSpan={5} align="center">West</TableCell>
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
            {westStandings.map(team => (
              <TableRow key={team.teamAbbreviation}>
                <TableCell>{team.playoffRank}</TableCell>
                <TableCell>{team.teamAbbreviation}</TableCell>
                <TableCell>{`${team.wins}-${team.losses}`}</TableCell>
                <TableCell>{team.winPct}</TableCell>
                <TableCell>{team.conferenceGamesBack}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};


