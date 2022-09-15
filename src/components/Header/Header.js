import React from "react";
import { StatusBar, Signal, Information } from "../Header/StyledHeader";
import signal from "../../assets/img/header/signal.svg";
import wifi from "../../assets/img/header/wifi.svg";
import bluetooth from "../../assets/img/header/bluetooth.svg";
import battery from "../../assets/img/header/battery.svg";

export const Header = () => {
    return (
        <StatusBar>
            <Signal>
                <img src={signal} height="14" />
                <p>Sketch</p>
                <img src={wifi} height="14" />
            </Signal>

            <Information>
                <p>9:41 AM</p>

                <div>
                    <img src={bluetooth} height="14" />
                    <p>100%</p>
                    <img src={battery} width="20" />
                </div>
            </Information>
        </StatusBar>
    );
};
