const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.username;

const getUserEmail = state => state.auth.user.email;

const getFamilyId = state => state.auth.user.familyId;

const getErrorMessage = state => state.auth.error;

const getAuthLoading = state => state.auth.isLoading;

export default {
  isAuthenticated,
  getUserName,
  getErrorMessage,
  getUserEmail,
  getFamilyId,
  getAuthLoading,
};
