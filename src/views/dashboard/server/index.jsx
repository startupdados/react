import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports

import { gridSpacing } from 'store/constant';
import ServerResourceBarChart from './Resources'
import AmbientLoadChart from './AmbientLoad'
import TaskList from './TaskList'
import MemoryUsage from './MemoryUsage'
import DiskSpace from './DiskSpace'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const DashboardServer = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>


            <Grid item xs={6}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12} md={3}>
                        <ServerResourceBarChart title="Server 1" />
                    </Grid>

                    {/* Exemplo de utilização do HorizontalBarChart */}
                    <Grid item xs={12} md={3}>
                        <AmbientLoadChart title="INST 01" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TaskList title="INST 01" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <MemoryUsage title="INST 01" />
                    </Grid>
                    <Grid item xs={12}>
                        <DiskSpace title="INST 01" />
                    </Grid>
                </Grid>
            </Grid>


            {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
        </Grid>
    );
};

export default DashboardServer;
