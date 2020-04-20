/* eslint-disable no-unused-vars */

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
                <div>
                    {TopNavigationBar()}
                </div>
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
