import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import OnlineDays from './OnlineDays'
import WaitEvents from './WaitEvents'
import AsmDiskGroup from './AsmDiskGroup'
import Instances from './Instances'
import ActiveSessionsInSeconds from './ActiveSessionsInSeconds'
import { gridSpacing } from 'store/constant';


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
                        <OnlineDays />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <WaitEvents />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AsmDiskGroup />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Instances />
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Instances />
                    </Grid>

                    <Grid item xs={12} md={12}>
                        <ActiveSessionsInSeconds />
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
