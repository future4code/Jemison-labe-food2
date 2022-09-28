export const goToStartPage = (navigate) => {
    navigate("/");
};

export const goToLoginPage = (navigate) => {
    navigate("/login");
};

export const goToSignUpPage = (navigate) => {
    navigate("/signup");
};

export const goToFeedPage = (navigate) => {
    navigate("/feedpage");
};

export const goToRestaurantDetailsPage = (navigate, id) => {
    navigate(`/restaurants/${id}`);
};

export const goToAddressPage = (navigate) => {
    navigate("/address");
};

export const goToAddressEditPage = (navigate) => {
    navigate("/address/edit-page");
};

export const goToCartPage = (navigate) => {
    navigate("/cart");
};

export const goToProfilePage = (navigate) => {
    navigate("/profile");
};

export const goToProfileEditPage = (navigate) => {
    navigate("/profile/edit-page");
};

export const goToBackPage = (navigate) => {
    navigate(-1);
};
