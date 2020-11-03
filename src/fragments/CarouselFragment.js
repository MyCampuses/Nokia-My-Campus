


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
            <div style={{height:"500px", paddingBottom:"50px"}}>
                <Fragment>
                    <div style={{height:"600px", minHeight: "100%"}}>
                        <Carousel autoPlay={false} navButtonsAlwaysVisible={true}
                                  animation="slide" indicators={true} className={classes.Carousel}
                                  style={{height:"100%", minHeight: "100%", maxHeight:"444px", top: "0px"}}>
                            <TabRestaurantMenu style={{height:"500px", minHeight: "100%", paddingTop:"none", top:"0px"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantLines style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantChart style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                            <RestaurantHeatMapView style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0}/>
                            <TabRestaurantDonut style={{height:"500px", minHeight: "100%"}} value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                        </Carousel>
                    </div>

                </Fragment>
            </div>
        );
    };

    return {
        Restaurant: Restaurant,
    };

};
export default CarouselFragment;