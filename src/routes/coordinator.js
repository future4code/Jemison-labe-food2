export const goToStartPage = (navigate) => {
    navigate("/");
};

export const goToBackPage = (navigate) => {
    navigate(-1);
};

export const goToLoginPage = (navigate) => {
    navigate("/login");
};

export const goToSignUpPage = (navigate) => {
    navigate("/signup");
};

export const goToAddressPage = (navigate) => {
    navigate("/address");
};

export const goToCartPage = (navigate) => {
    navigate("/cart");
};

export const goToProfilePage = (navigate) => {
    navigate("/profile");
};

export const ggoToRestaurantDetailsPage = (navigate) => {
    navigate(`/restaurantdetails/`);
    // quando tiver o id, substituir por: navigate(`/restaurantdetails/${id}`);
=======
export const goToLoginPage = (navigate) => {
    navigate("/login");
};

export const goToAddressPage = (navigate) => {
    navigate("/address");
};

export const goToCartPage = (navigate) => {
    navigate("/cart");
};

export const goToProfilePage = (navigate) => {
    navigate("/profile");
};

export const goToEditPage = (navigate) => {
    navigate("/edit");
};
