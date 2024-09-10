import React from 'react';
import Chart from 'react-apexcharts';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';

// Dados fictícios para o gráfico
const data = [
  { name: 'Server 1', CPU: 49, IDLE: 11, "Disco I/O": 0 }, // Mudando para "Disco I/O"
];

const ServerResourceBarChart = ({ title }) => {
  const theme = useTheme();

  // Definir as categorias (CPU, IDLE, Disco I/O) e os valores correspondentes
  const categories = ['CPU', 'IDLE', 'Disco I/O'];
  const seriesData = categories.map(key => ({
    x: key,
    y: data[0][key], // Extraímos os valores do primeiro servidor
  }));

  // Opções do gráfico
  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        dataLabels: {
          position: 'top',
        },
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + '%';
      },
      style: {
        fontSize: '14px',
        colors: ['#000'],
      },
      offsetY: -20,
    },
    stroke: {
      show: false,
    },
    colors: ['#FF4560', '#00E396', '#775DD0'], // Cores para CPU, IDLE e Disco I/O
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: ['#000'],
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Porcentagem (%)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + '%';
        },
      },
    },
  };

  // Definir os dados da série (neste caso, estamos usando apenas um servidor)
  const series = [{
    name: 'Quantidade',
    data: seriesData.map(item => item.y), // Garantindo que o valor de "Disco I/O" seja correto
  }];

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h4" component="div" align="center">
            {title} - Uso de Recursos / Processos
          </Typography>
        }
      />
      <CardContent>
        <Box sx={{ textAlign: 'center' }}>
          <Chart options={options} series={series} type="bar" height={350} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServerResourceBarChart;
