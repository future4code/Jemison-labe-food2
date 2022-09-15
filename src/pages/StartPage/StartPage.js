import React from "react";
import { HomeContainer } from "./StyledStartPage";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export function StartPage() {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <button
                onClick={() => {
                    goToLoginPage(navigate);
                }}></button>
        </HomeContainer>
    );
}
