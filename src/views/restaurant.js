/* eslint-disable no-unused-vars */
/*
    This file contains the view for the restaurant view with authorisation check
 */
import React from 'react';
import Authentication from '../hooks/Authentication';
import NaviBar from "../fragments/TopNavigationBarFragment";
import AuthLoading from "./authLoading";
import BottomBarTabFragment from "../fragments/BottomBarFragment";

const Restaurant = () => {
    const {isLoggedIn} = Authentication();
    const {TopNavigationBar} = NaviBar();
    const {RestaurantBottomTab} = BottomBarTabFragment();

    const RestaurantPage = () => {
        return (
            <div>
                {TopNavigationBar()}
                {RestaurantBottomTab()}
            </div>
        )
    };
    const AuthRestaurant = () => {
        if (isLoggedIn()) {
            return <RestaurantPage/>
        } else {

            return <AuthLoading/>
        }
    };

    return (
        <AuthRestaurant/>
    )
};

export default Restaurant;
