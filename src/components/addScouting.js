import React, { useState } from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button
} from '@mui/material';



export default function AddScouting({ isOpen, handleCloseAdd, gameID, addScoutingReport }) {

    const [scoutingReport, setScoutingReport] = useState({
        nbaGameId: gameID,
        scout: '',
        nbaId: '',
        name: '',
        report: ''
    });

    const [error, setError] = useState({
        scout: '',
        nbaId: '',
        name: '',
        report: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        const errors = {
            scout: '',
            nbaId: '',
            name: '',
            report: ''
        };

        if (!scoutingReport.scout) {
            errors.scout = 'Scout name is required';
            isValid = false;
        }

        if (!scoutingReport.nbaId) {
            errors.nbaId = 'NBA ID required';
            isValid = false;
        }

        if (!scoutingReport.name) {
            errors.name = 'Player name is required';
            isValid = false;
        }

        if (!scoutingReport.report) {
            errors.report = 'Report is required';
            isValid = false;
        }

        if (isValid) {
            addScoutingReport(scoutingReport)

            handleCloseAdd();
        } else {
            setError(errors);
        }
    };

    return (
        <Modal open={isOpen} onClose={handleCloseAdd}>
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
                    Add Scouting Report
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Game ID"
                        variant="outlined"
                        fullWidth
                        disabled
                        value={gameID}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Scout"
                        variant="outlined"
                        fullWidth
                        value={scoutingReport.scout}
                        onChange={(e) => setScoutingReport({ ...scoutingReport, scout: e.target.value })}
                        error={!!error.scout}
                        helperText={error.scout}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="NBA ID"
                        variant="outlined"
                        fullWidth
                        value={scoutingReport.nbaId}
                        onChange={(e) => setScoutingReport({ ...scoutingReport, nbaId: e.target.value })}
                        error={!!error.nbaId}
                        helperText={error.nbaId}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Player Name"
                        variant="outlined"
                        fullWidth
                        value={scoutingReport.name}
                        onChange={(e) => setScoutingReport({ ...scoutingReport, name: e.target.value })}
                        error={!!error.name}
                        helperText={error.name}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Report"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={scoutingReport.report}
                        onChange={(e) => setScoutingReport({ ...scoutingReport, report: e.target.value })}
                        error={!!error.report}
                        helperText={error.report}
                        sx={{ mb: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Add Report
                    </Button>
                </form>
            </Box>
        </Modal>
    );
}
