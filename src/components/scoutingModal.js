import React, { useState } from 'react';
import AddScouting from './addScouting';
import ViewScouting from './viewScouting';
import gameData from './gameData.json';
import { Button } from '@mui/material';

export default function ScoutingModal ({gameID}){


  const [scoutingReports, setScoutingReports] = useState(
    gameData.scoutingReports
  );
  const [openScout, setOpenScout] = React.useState(false);
  const [openAdd, setOpenAdd] = React.useState(false)
  
  const addScoutingReport = (newReport) => {
    setScoutingReports([...scoutingReports, newReport]);
  };
  const handleOpenScout = () => {
    setOpenScout(true)
  }
  const handleCloseScout = () => setOpenScout(false);

  const handleOpenAdd = () => {
    setOpenAdd(true)
  }
  const handleCloseAdd = () => setOpenAdd(false)

  return (
    <div>
        <Button onClick={() => handleOpenScout(gameID)}> View </Button>
        <Button onClick={() => handleOpenAdd(gameID)}> + </Button>
        <ViewScouting isOpen={openScout} handleCloseScout={handleCloseScout} gameID={gameID} scoutingReports={scoutingReports}/>
      <AddScouting isOpen={openAdd} handleCloseAdd={handleCloseAdd} gameID={gameID} addScoutingReport={addScoutingReport} />
    </div>
  );
};


