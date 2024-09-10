import React from 'react';
import Chart from 'react-apexcharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const instancesData = [
  {
    id: "Instância 01",
    events: {
      CPU: 35,
      IDLE: 50,
      "Disco I/O": 15
    }
  },
  {
    id: "Instância 02",
    events: {
      CPU: 25,
      IDLE: 40,
      "Disco I/O": 20
    }
  }
];

const InstanceEvents = () => {
  return (
    <Grid container spacing={2}>
      {instancesData.map((instance, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <InstanceCard instance={instance} />
        </Grid>
      ))}
    </Grid>
  );
};

const InstanceCard = ({ instance }) => {
  const categories = Object.keys(instance.events);
  const seriesData = categories.map(key => ({
    x: key,
    y: instance.events[key]
  }));

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        dataLabels: {
          position: 'top'
        },
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      style: {
        fontSize: '14px',
        colors: ['#000']
      },
      offsetY: -20,
    },
    stroke: {
      show: false
    },
    colors: categories.map(key => getColorByKey(key)),
    xaxis: {
      categories: categories
    },
    yaxis: {
      title: {
        text: 'Quantidade'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '%';
        }
      }
    }
  };

  const series = [{
    name: 'Quantidade',
    data: seriesData
  }];

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {instance.id} - Uso de Recursos / Processos
          </Typography>
        }
      />
      <Chart options={options} series={series} type="bar" height={350} />
    </Card>
  );
};

function getColorByKey(key) {
  const colors = {
    CPU: '#FF4560',
    IDLE: '#00E396',
    "Disco I/O": '#775DD0'
  };
  return colors[key];
}

export default InstanceEvents;
