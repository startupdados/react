// Esse é o meu estilo de página báscio

// import { useEffect, useState } from 'react';

// // material-ui
// import Grid from '@mui/material/Grid';

// // project imports
// import EarningCard from './EarningCard';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
// import TotalGrowthBarChart from './TotalGrowthBarChart';

// import { gridSpacing } from 'store/constant';

// // assets
// import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

// // ==============================|| DEFAULT DASHBOARD ||============================== //

// const Dashboard = () => {
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(false);
//   }, []);

//   return (
//     <Grid container spacing={gridSpacing}>
//       <Grid item xs={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid item lg={4} md={6} sm={6} xs={12}>
//             <EarningCard isLoading={isLoading} />
//           </Grid>
//           <Grid item lg={4} md={6} sm={6} xs={12}>
//             <TotalOrderLineChartCard isLoading={isLoading} />
//           </Grid>
//           <Grid item lg={4} md={12} sm={12} xs={12}>
//             <Grid container spacing={gridSpacing}>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <TotalIncomeDarkCard isLoading={isLoading} />
//               </Grid>
//               <Grid item sm={6} xs={12} md={6} lg={12}>
//                 <TotalIncomeLightCard
//                   {...{
//                     isLoading: isLoading,
//                     total: 203,
//                     label: 'Total Income',
//                     icon: <StorefrontTwoToneIcon fontSize="inherit" />
//                   }}
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Grid container spacing={gridSpacing}>
//           <Grid item xs={12} md={8}>
//             <TotalGrowthBarChart isLoading={isLoading} />
//           </Grid>
//           <Grid item xs={12} md={4}>
//             <PopularCard isLoading={isLoading} />
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default Dashboard;


// Lembra que estou usando o berry como template.

// Quero fazer uma página que vai ser 3 tabelas, quero que essas tabelas tenham as seguintes esturutra:

// - O cabeçalho com a cor theme.palette.primary.main, e o texto em branco.
// - Uma linha branca outra cinza, o cinza dessa cor theme.palette.grey[300]
// - Quero que dê para selecionar cada linha ou todas e exportar como csv. 
// - Quero que cada tabela tenha um botão do lado direito (ultima coluna) que abra um modal copiando os dados da linha.
// - Quero que tenha como filtrar as colunas
// - Quero que faça usando mui

// Faça com dados ficticios 

