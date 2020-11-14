const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.username;

const getUserEmail = state => state.auth.user.email;

const getFamilyId = state => state.auth.user.familyId;

const getLoader = state => state.auth.loading;

const getErrorCode = state => state.auth.error.code;
const getErrorMessage = state => state.auth.error.message;

const getAuthLoading = state => state.auth.isLoading;

export default {
  isAuthenticated,
  getUserName,
  getLoader,
  getErrorMessage,
  getErrorCode,
  getUserEmail,
  getFamilyId,
  getAuthLoading,
};
