import React from 'react';
import '../../Components/Header/Header.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 900,
    backgroundColor : 'rgb(246, 233, 42)',
    fontSize :'45px',
    color: 'white',
    marginLeft: '110px'
  },
});



const Header = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
    return (
      <div className="container"> 
        <BottomNavigation Container 
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction variant = "body2" label="Home" href = "/home"/>
      <BottomNavigationAction label="Post" href = "#"/>
      <BottomNavigationAction label="Post Details"  href = "/postDetails"/>
      <BottomNavigationAction label="Contact with the developers" href = "/contact"/>

    </BottomNavigation>
    </div>
    );
};

export default Header;