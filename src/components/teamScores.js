import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper
} from '@mui/material';



export default function TeamScores({ selectedTeamScores }) {

    return (
        <Paper sx={{ height: '100%', overflow: 'hidden' }}>

            {selectedTeamScores === 'undefined' ? (
                <Typography variant="body1">
                    Game has not started.
                </Typography>
            ) : (
                <>
                    <TableContainer>
                        <Table sx={{ minWidth: 0 }} size="large" aria-label="team stats table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Stats</TableCell>
                                    <TableCell>Num</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        MIN
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['min']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        FGM
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['fgm']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        FGA
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['fga']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        FTM
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['ftm']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        FTA
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['fta']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        TPM
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['tpm']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        TPA
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['tpa']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        oreb
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['oreb']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        dreb
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['dreb']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        reb
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['reb']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        ast
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['ast']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        stl
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['stl']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        tov
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['tov']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        pf
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['pf']}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        pts
                                    </TableCell>
                                    <TableCell>{selectedTeamScores['pts']}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer></>
            )}
        </Paper>
    );
}