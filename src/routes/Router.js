import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "../pages/StartPage/StartPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { AddressPage } from "../pages/AddressPage/AddressPage";
import { AddressEditPage } from "../pages/AddressEditPage/AddressEditPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { ProfileEditPage } from "../pages/ProfileEditPage/ProfileEditPage";
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
                <Route path="address/edit-page" element={<AddressEditPage />} />
                <Route path="feedpage" element={<FeedPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="profile/edit-page" element={<ProfileEditPage />} />

                <Route
                    path="restaurants/:id"
                    element={<RestaurantDetailsPage />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
