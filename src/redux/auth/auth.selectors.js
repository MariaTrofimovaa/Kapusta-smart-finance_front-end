const getIsAuth = (state) => state.auth.isAuthenticated;
// const isAuthToken = (state) => !!state.auth.token;
const getAuthUserName = (state) => state.auth.user.email;

const getAuthToken = (state) => state.auth.token;
const getUserID = (state) => state.auth.user.id;

export { getIsAuth, getAuthUserName, getAuthToken, getUserID };

// export { getIsAuth, getAuthUserName, getAuthToken, getAuth, getIsRegistr };
