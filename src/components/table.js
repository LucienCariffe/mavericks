import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Link,
  Button,
  Typography
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import gameData from './gameData.json';
import TeamModal from './teamModal';
import PlaybyPlay from './playByPlay';
import GameModal from './gameModal';
import ScoutingModal from './scoutingModal';




const renderQuarterPoints = (quarterPoints, handleOpenPlay, gameID) => {
  let previousPeriod = null;
  return quarterPoints.map((quarterPoint, index) => {

    const isFirstRow = previousPeriod !== quarterPoint.period;


    previousPeriod = quarterPoint.period;
    return (
      <TableRow key={index}>
        {isFirstRow && (
          <TableCell align="center" rowSpan={quarterPoints.filter(q => q.period === quarterPoint.period).length}>

            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'space-evenly' }}>
              <div>{quarterPoint.period}</div>
              <div >
                <Button color="primary" sx={{ fontSize: '0.65rem', padding: '2px 2px' }} onClick={() => handleOpenPlay(quarterPoint.period, gameID)}>
                  Play by Play
                </Button>
              </div>
            </div>
          </TableCell>
        )}
        <TableCell align="left"> {quarterPoint.team}</TableCell>
        <TableCell align="left">{quarterPoint.pts}</TableCell>
      </TableRow>
    );
  });
};

export default function DenseTable() {

  const [open, setOpen] = React.useState(false);
  const [selectedTeam, setSelectedTeam] = React.useState(null);
  const [openPlay, setOpenPlay] = React.useState(false);
  const [selectedPeriod, setSelectedPeriod] = React.useState(null);
  const [selectedID, setSelectedID] = React.useState(null);

  const [openScores, setOpenScores] = React.useState(false)


  const handleOpenPlay = (period, gameID) => {
    setSelectedPeriod(period);
    setOpenPlay(true);
    setSelectedID(gameID)

  }
  const handleClosePlay = () => setOpenPlay(false);



  const handelOpenScores = (team, gameId) => {
    setOpenScores(true)
    setSelectedTeam(team)
    setSelectedID(gameId)
  }
  const handleCloseScores = () => setOpenScores(false)


  const handleOpen = (team) => {
    setSelectedTeam(team);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [openRowId, setOpenRowId] = React.useState(null);

  const handleRowClick = (rowId) => {
    setOpenRowId(openRowId === rowId ? null : rowId);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Opponent</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Win/Loss</TableCell>
              <TableCell align="center">Score</TableCell>
              <TableCell align="center">Season Series</TableCell>
              <TableCell align="center">Location/Arena</TableCell>
              <TableCell align="center">Scouting Report</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gameData.games.map((game, index) => (
              <React.Fragment key={game.nbaGameId}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <Link href="#" onClick={() => handleOpen("DAL")}>
                      DAL
                    </Link>
                    {game.homeTeam === 'DAL' ? ' vs ' : ' at '}
                    <Link href="#" onClick={() => handleOpen(game.homeTeam === 'DAL' ? game.awayTeam : game.homeTeam)}>
                      {game.homeTeam === 'DAL' ? game.awayTeam : game.homeTeam}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{game.timeEst}</TableCell>
                  <TableCell align="center">{game.date}</TableCell>
                  <TableCell align="center">
                    {game.gameStatus === 3 ? (
                      game.homeTeam === 'DAL' ? (
                        game.homeTeamPoints > game.awayTeamPoints ? 'Win' : 'Loss'
                      ) : (
                        game.awayTeamPoints > game.homeTeamPoints ? 'Win' : 'Loss'
                      )
                    ) : (
                      '-'
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Link href="#" onClick={() => handelOpenScores(game.awayTeam, game.nbaGameId)}>{
                      game.awayPts}
                    </Link>-
                    <Link href="#" onClick={() => handelOpenScores(game.homeTeam, game.nbaGameId)}>
                      {game.homePts}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{game.seasonType}</TableCell>
                  <TableCell align="center">{game.location}/{game.arena}</TableCell>
                  <TableCell align="center">
                    <ScoutingModal
                      gameID={game.nbaGameId}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label={openRowId === index ? 'collapse row' : 'expand row'}
                      size="small" onClick={() => handleRowClick(index)}
                    >
                      {openRowId === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={openRowId === index} timeout="auto" unmountOnExit>
                      {gameData.quarterPoints.filter(quarterPoint => quarterPoint.nbaGameId === game.nbaGameId).length === 0 ? (
                        <Typography variant="body1">
                          Game has not started
                        </Typography>
                      ) : (
                        <Table size="small" aria-label="quarter points">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Quarter</TableCell>
                              <TableCell align="left">Team</TableCell>
                              <TableCell align="left">Points</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>

                            {renderQuarterPoints(gameData.quarterPoints.filter(quarterPoint => quarterPoint.nbaGameId === game.nbaGameId), handleOpenPlay, game.nbaGameId)}

                          </TableBody>
                        </Table>
                      )}
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TeamModal isOpen={open} handleClose={handleClose} selectedTeam={selectedTeam} />
      <PlaybyPlay isOpen={openPlay} handleClosePlay={handleClosePlay} selectedPeriod={selectedPeriod} selectedID={selectedID} />
      <GameModal isOpen={openScores} handleCloseScores={handleCloseScores} selectedID={selectedID} selectedTeam={selectedTeam} />
    </>
  );
}
