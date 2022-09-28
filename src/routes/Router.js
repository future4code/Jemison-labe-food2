import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StartPage } from "../pages/StartPage/StartPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AddressPage } from "../pages/AddressPage/AddressPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { EditPageProfile } from "../pages/EditPageProfile/EditPageProfile";
import { EditPageAddress } from "../pages/EditPageAddress/EditPageAddress";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { RestaurantDetailsPage } from "../pages/RestaurantDetailsPage/RestaurantDetailsPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { FeedPage } from "../pages/FeedPage/FeedPage";


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<StartPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="address" element={<AddressPage />} />
                <Route path="feedpage" element={<FeedPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="restaurants/:id" element={<RestaurantDetailsPage />}/>
                <Route path="editprofile" element={<EditPageProfile />} />
                <Route path="editaddress" element={<EditPageAddress />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
