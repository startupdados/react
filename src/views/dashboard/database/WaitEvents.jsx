import React from 'react';
import Chart from 'react-apexcharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

const WaitEvents = () => {
  // Objeto com valores dos eventos
  const waitEventsObject = {
    LOCK: 23,
    Idle: 40,
    Cluster: 10,
    Other: 15,
    UserIO: 25,
    Network: 30
  };

  const categories = Object.keys(waitEventsObject);
  const seriesData = categories.map(key => ({
    x: key,
    y: waitEventsObject[key],
    fillColor: getColorByKey(key)
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
        columnWidth: '30%',
        dataLabels: {
          position: 'top'
        },
        borderRadius: 5
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '14px',
        colors: ['#000']
      },
      offsetY: -20,
    },
    stroke: {
      show: false
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      onItemClick: {
        toggleDataSeries: true
      }
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
          return val ;
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
            Eventos Em Espera
          </Typography>
        }
      />
      <Chart options={options} series={series} type="bar" height={350} />
    </Card>
  );
};

function getColorByKey(key) {
  const colors = {
    LOCK: '#FF4560',
    Idle: '#00E396',
    Cluster: '#008FFB',
    Other: '#775DD0',
    UserIO: '#FEB019',
    Network: '#00D9E9'
  };
  return colors[key];
}

export default WaitEvents;
