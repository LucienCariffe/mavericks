import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { TableVirtuoso } from 'react-virtuoso';


const columns = [
    { width: 200, label: 'Name', dataKey: 'name' },
    { width: 120, label: 'Jersey Number', dataKey: 'jerseyNum', numeric: true },
    { width: 120, label: 'Position', dataKey: 'startPos', numeric: true },
    { width: 120, label: 'Minutes', dataKey: 'min', numeric: true },
    { width: 120, label: 'FGM', dataKey: 'fgm', numeric: true },
    { width: 120, label: 'FGA', dataKey: 'fga', numeric: true },
    { width: 120, label: 'FTM', dataKey: 'ftm', numeric: true },
    { width: 120, label: 'FTA', dataKey: 'fta', numeric: true },
    { width: 120, label: '3 PM', dataKey: 'tpm', numeric: true },
    { width: 120, label: '3 PA', dataKey: 'tpa', numeric: true },
    { width: 120, label: 'OREB', dataKey: 'oreb', numeric: true },
    { width: 120, label: 'DREB', dataKey: 'dreb', numeric: true },
    { width: 120, label: 'REB', dataKey: 'reb', numeric: true },
    { width: 120, label: 'AST', dataKey: 'ast', numeric: true },
    { width: 120, label: 'STL', dataKey: 'stl', numeric: true },
    { width: 120, label: 'BLK', dataKey: 'blk', numeric: true },
    { width: 120, label: 'TOV', dataKey: 'tov', numeric: true },
    { width: 120, label: 'PF', dataKey: 'pf', numeric: true },
    { width: 120, label: 'PTS', dataKey: 'pts', numeric: true },
    { width: 120, label: '+/-', dataKey: 'plusMinus', numeric: true },

];

const VirtuosoTableComponents = {
    Scroller: React.forwardRef(function ScrollerComponent(props, ref) {
        return <TableContainer component={Paper} {...props} ref={ref} />;
    }),
    Table: function TableComponent(props) {
        return <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />;
    },
    TableHead: TableHead,
    TableRow: function TableRowComponent({ item: _item, ...props }) {
        return <TableRow {...props} />;
    },
    TableBody: React.forwardRef(function TableBodyComponent(props, ref) {
        return <TableBody {...props} ref={ref} />;
    }),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{
                        backgroundColor: 'background.paper',
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index, player) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                >
                    {column.dataKey === 'startPos' && !player[column.dataKey] ? '-' : player[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

export default function PlayerScoresTable({ selectedPlayerScores }) {

    return (
        <Paper style={{ height: 670, width: '100%' }}>
            <TableVirtuoso
                data={selectedPlayerScores}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
            />
        </Paper>
    );
}

VirtuosoTableComponents.displayName = 'table'