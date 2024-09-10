import PropTypes from 'prop-types';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import { IconServer } from '@tabler/icons-react';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
}));

const exampleServers = [
    { name: "Servidor 1", daysOnline: 120, instanceId: "INST 001" },
    { name: "Servidor 2", daysOnline: 75, instanceId: "INST 002" },
    { name: "Servidor 3", daysOnline: 45, instanceId: "INST 003" },
    { name: "Servidor 3", daysOnline: 45, instanceId: "INST 003" },
];

const OnlinedaysCard = ({ isLoading }) => {
    const theme = useTheme();

    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <Grid container spacing={2} justifyContent="center" alignItems="center"> 
                      {exampleServers.map((server, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index}>
                            <CardWrapper border={false} content={false}>
                                <ListItem justifyContent="center" alignItems="center" disableGutters sx={{ flexShrink: 1, mr: '2em', display: 'flex', width: '100%' }}>
                                    <ListItemAvatar>
                                        <Avatar
                                            variant="rounded"
                                            sx={{
                                                ...theme.typography.commonAvatar,
                                                ...theme.typography.largeAvatar,
                                                bgcolor: theme.palette.primary.light,
                                                color: theme.palette.primary.dark
                                            }}
                                        >
                                            <IconServer />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        sx={{ py: 0, mt: 0.25, mb: 0.25 }}
                                        primary={<Typography variant="h2">{server.daysOnline}</Typography>}
                                        secondary={
                                            <Typography variant="subtitle1" sx={{ color: 'grey.500', mt: 0.0 }}>
                                                {server.name}
                                            </Typography>
                                        }
                                    />
                                    <Typography sx={{ p: 1 }} align='center' variant="h2">{server.instanceId}</Typography>
                                </ListItem>
                            </CardWrapper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

OnlinedaysCard.propTypes = {
    isLoading: PropTypes.bool
};

export default OnlinedaysCard;
