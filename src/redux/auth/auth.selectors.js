const getIsAuth = (state) => !!state.auth.token;
const getAuthUserName = (state) => state.auth.user.username;
const getIsRegistr = (state) => state.auth.isRegistrated;
const getAuth = (state) => state.auth;
const getAuthToken = (state) => state.auth.token;

export { getIsAuth, getAuthUserName, getAuthToken, getAuth, getIsRegistr };
