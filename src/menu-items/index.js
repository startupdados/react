import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import monitoring from './monitoring';
import startup from './startup'
import config from './config'
import reports from './report'

// ==============================|| MENU ITEMS ||============================== //

// const menuItems = {
//   items: [dashboard,monitoring,startup, pages, utilities, other]
// };


const menuItems = {
  items: [dashboard,reports, monitoring,startup, config]
};

export default menuItems;
