import DonutFragment from "./DonutFragment";
import React, {Fragment} from "react";

const RWidget = (props) =>{
    const {Donut} = DonutFragment();

    const RDWidget = (items) =>{
        return (
            <Fragment>

            </Fragment>
        );
    };
    return {
        RDWidget: RDWidget
    }
};