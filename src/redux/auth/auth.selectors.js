const getIsAuth = (state) => state.auth.isAuthenticated;
// const getIsAuth = (state) => !!state.auth.token;
const getAuthUserName = (state) => state.auth.user.email;
// const getIsRegistr = (state) => state.auth.isRegistrated;

// const getAuth = (state) => state.auth;
const getAuthToken = (state) => state.auth.token;

export { getIsAuth, getAuthUserName, getAuthToken };

// export { getIsAuth, getAuthUserName, getAuthToken, getAuth, getIsRegistr };
