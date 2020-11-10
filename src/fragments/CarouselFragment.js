import {makeStyles} from "@material-ui/core";
import TabFragments from "./TabFragments";
import React, {Fragment, useState} from "react";
import Carousel from "react-material-ui-carousel";
import RestaurantHeatMapView from "../views/restaurantHeatMap";


const useStyle = makeStyles(() => ({
    Carousel: {
        height: "620px",
        minHeight: "620px",
        maxHeight:"620px",
    },
    Frag: {
        height:"100%", 

    },
}));

const CarouselFragment = (props) => {
    const classes = useStyle();
    const {TabRestaurantLines, TabRestaurantChart, TabRestaurantDonut, TabRestaurantMenu} = TabFragments();

    const Restaurant = () => {
        const [valueRestaurant] = useState(0);
        const [date, setDate] = useState(new Date());

        const handleDateChange = (data) => {
            setDate(data);
        };
//
        return (          
                <Fragment className={classes.Frag}>                    
                        <Carousel autoPlay={false} navButtonsAlwaysVisible={false}
                                  animation="slide" indicators={true} className={classes.Carousel}
                                  style={{height:"100%", minHeight: "100%", maxHeight:"444px", top: "0px"}}>
                            <TabRestaurantMenu style={{height:"500px", minHeight: "100%", paddingTop:"none", top:"0px"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantLines style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantChart style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                            <RestaurantHeatMapView style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantDonut style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                        </Carousel>                    
                </Fragment>          
        );
    };

    return {
        Restaurant: Restaurant,
    };

};
export default CarouselFragment;