import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, Box, IconButton, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Dados fictícios para a lista
const taskData = {
  total: 480,
  running: 5,
  sleeping: 367,
  stopped: 0,
  zombie: 0,
};

const TaskList = ({ title }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div">
            {title} - Tasks
          </Typography>
        }
        action={
          <IconButton onClick={handleExpandClick}>
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        }
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
          <Typography sx={{ fontSize: '18px' }}>Total</Typography>
          <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
            {taskData.total}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
          <Typography sx={{ fontSize: '18px' }}>Zombie</Typography>
          <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
            {taskData.zombie}
          </Typography>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
            <Typography sx={{ fontSize: '18px' }}>Running</Typography>
            <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
              {taskData.running}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
            <Typography sx={{ fontSize: '18px' }}>Sleeping</Typography>
            <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
              {taskData.sleeping}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.2 }}>
            <Typography sx={{ fontSize: '18px' }}>Stopped</Typography>
            <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: 'bold' }}>
              {taskData.stopped}
            </Typography>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default TaskList;
