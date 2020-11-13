
import {makeStyles} from "@material-ui/core";
import TabFragments from "./TabFragments";
import React, {Fragment, useState} from "react";
import Carousel from "react-material-ui-carousel";
import RestaurantHeatMapView from "../views/restaurantHeatMap";


const useStyle = makeStyles(() => ({
    Carousel: {
        minHeight: "91vh",
    },
}));

const CarouselFragment = (props) => {
    const classes = useStyle();
    const {TabRestaurantChart, TabRestaurantDonut, TabRestaurantMenu} = TabFragments();

    const Restaurant = () => {
        const [valueRestaurant] = useState(0);
        const [date, setDate] = useState(new Date());

        const handleDateChange = (data) => {
            setDate(data);
        };
//
        return (
                <Fragment>
                        <Carousel autoPlay={false} navButtonsAlwaysVisible={true}
                                  animation="slide" className={classes.Carousel} noWrap={true}>
                            <TabRestaurantMenu value={valueRestaurant} index={0}/>
                            <TabRestaurantChart value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                            <RestaurantHeatMapView value={valueRestaurant} index={0}/>
                            <TabRestaurantDonut value={valueRestaurant} index={0} onDateChange={handleDateChange} date={date}/>
                        </Carousel>
                </Fragment>
        );
    };

    return {
        Restaurant: Restaurant,
    };

};
export default CarouselFragment;