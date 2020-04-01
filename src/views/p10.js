import React from "react";

import p10Styles from '../styles/p10Styles'
import commonStyles from "../styles/commonStyles";
import '../styles/App.css';
import '../styles/p10Style.css'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from '@material-ui/core/Box';

function TabFragment(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabfragment"
            hidden={value !== index}
            id={`tabfragment-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <Box p={5}>{children}</Box>}
        </Typography>
    );
}

const P10 = () => {
    const p10classes = p10Styles();
    const commonClasses = commonStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container component="main" maxWidth="lg" id="mainContainer">
            <div className="p10">
                <Typography className={p10classes.p10title} component="h1" variant="h5">P10</Typography>
            </div>
            <TabFragment value={value} index={0}>
                Live
            </TabFragment>
            <TabFragment value={value} index={1}>
                History
            </TabFragment>
            <Tabs
                value={value}
                onChange={handleChange}
                className={commonClasses.bottomTabs}
                variant="fullWidth"
                indicatorColor="#008AFF"
            >
                <Tab id="live" label="Live"/>
                <Tab id="history" label="History"/>
            </Tabs>
        </Container>
    );
};

export default P10