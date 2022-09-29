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


export const goToCarrinhoPage = (navigate) => {
    navigate("/car");
}


export const goToAddressPage = (navigate) => {
    navigate("/address");
};

export const goToCartPage = (navigate) => {
    navigate("/cart");
};

export const goToProfilePage = (navigate) => {
    navigate("/profile");
};

export const goToProfileEditUser = (navigate) => {
    navigate("/profile/edit/user");
};

export const goToProfileEditAddress = (navigate) => {
    navigate("/profile/edit/address");
};

export const goToBackPage = (navigate) => {
    navigate(-1);
};
