import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import WaitEvents from './WaitEvents'
import AsmDiskGroup from './AsmDiskGroup'
import InstanceEvents from './Instances'
import ActiveSessionsInSeconds from './ActiveSessionsInSeconds'
import { gridSpacing } from 'store/constant';
import ActiveSessionCard from './ActiveSessionCard';
import OnlinedaysCard from './OnlinedaysCard'
import RelativeTablespaceSize from './RelativeTablespaceSize'
// ==============================|| DATABASE DASHBOARD ||============================== //

const DashboardDatabase = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>


            <Grid item xs={12} md={12} lg={12}>

                <Grid container spacing={1.5}>

                    <Grid item xs={12} md={12}>
                        <OnlinedaysCard {...{
                            isLoading: isLoading,

                        }} />

                    </Grid>




                    <Grid item xs={6} md={3}>
                        <ActiveSessionCard
                            {...{
                                isLoading: isLoading,

                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ActiveSessionCard
                            {...{
                                isLoading: isLoading,

                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ActiveSessionCard
                            {...{
                                isLoading: isLoading,

                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <ActiveSessionCard
                            {...{
                                isLoading: isLoading,

                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <WaitEvents />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AsmDiskGroup />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InstanceEvents />
                    </Grid>

              
                    <Grid item xs={12} md={12}>
                        <ActiveSessionsInSeconds />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <RelativeTablespaceSize />
                    </Grid>

                </Grid>

                {/* <Grid container spacing={1.5}>
                  <Grid item xs={12}>
                    <OnlineDays/>
                  </Grid>
                  
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
                </Grid> */}
            </Grid>
        </Grid>
    );
};

export default DashboardDatabase;
