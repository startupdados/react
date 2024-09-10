import React, { useState, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
  useTheme,
  Chip,
  Button,
} from '@mui/material';
import GenericDrawer from './GenericDrawer';

const initialDiskData = [
  {
    collectionDate: '2024-09-01 13:06:27',
    name: 'Client One',
    sigla: 'ABC',
    database: 'Database One',
    hostName: 'Server 1',
    instanceNumber: 1,
    mountPoint: '/mnt/data1',
    totalSize: 1000,
    availableSize: 200,
    usedPercentage: 80,
    daysToOverflow: 10,
    status: 'Under Analysis',
  },
  // Add more sample data here if needed
];

const CriticalDiskTable = ({ title }) => {
  const theme = useTheme();
  const [diskData] = useState(initialDiskData);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [orderBy, setOrderBy] = useState('collectionDate');
  const [order, setOrder] = useState('asc');

  const headCells = [
    { id: 'collectionDate', label: 'Collection Date', numeric: false },
    { id: 'name', label: 'Client Name', numeric: false },
    { id: 'sigla', label: 'Client Sigla', numeric: false },
    { id: 'database', label: 'Database', numeric: false },
    { id: 'hostName', label: 'Host Name', numeric: false },
    { id: 'instanceNumber', label: 'Instance Number', numeric: true },
    { id: 'status', label: 'Status', numeric: false },
    { id: 'action', label: 'Action', numeric: false, sortable: false },
  ];

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = useMemo(() => {
    const comparator = (a, b) => {
      if (b[orderBy] < a[orderBy]) {
        return order === 'asc' ? 1 : -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return order === 'asc' ? -1 : 1;
      }
      return 0;
    };

    return [...diskData].sort(comparator);
  }, [diskData, order, orderBy]);

  const handleOpenDrawer = (row) => {
    setSelectedRow({
      date: row.collectionDate,
      sigla: row.sigla,
      name: row.name,
      database: row.database,
      hostName: row.hostName,
      instanceNumber: row.instanceNumber,
    });
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <Card>
      <CardHeader
        title={<Typography variant="h4" component="div" align="center">{title} Critical Disk Monitoring</Typography>}
      />
      <CardContent>
        <TableContainer sx={{ maxWidth: '100%', overflowX: 'auto' }}>
          <Table stickyHeader sx={{ tableLayout: 'auto' }}>
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align="center"
                    sx={{ backgroundColor: theme.palette.primary.main, color: 'white', whiteSpace: 'nowrap' }}
                  >
                    {headCell.sortable !== false ? (
                      <TableSortLabel
                        active={orderBy === headCell.id}
                        direction={orderBy === headCell.id ? order : 'asc'}
                        onClick={() => handleRequestSort(headCell.id)}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    ) : (
                      headCell.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((disk, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{disk.collectionDate}</TableCell>
                  <TableCell align="center">{disk.name}</TableCell>
                  <TableCell align="center">{disk.sigla}</TableCell>
                  <TableCell align="center">{disk.database}</TableCell>
                  <TableCell align="center">{disk.hostName}</TableCell>
                  <TableCell align="center">{disk.instanceNumber}</TableCell>
                  <TableCell align="center">
                    <Chip label={disk.status} color="warning" />
                  </TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="primary" onClick={() => handleOpenDrawer(disk)}>Chamado</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>

      <GenericDrawer open={drawerOpen} onClose={handleCloseDrawer} data={selectedRow} />
    </Card>
  );
};

export default CriticalDiskTable;