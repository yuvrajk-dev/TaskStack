const authValidation = (
  username,
  email,
  password,
  confirmPassword,
  isLogin,
) => {
  const authErrors = {};

  if (!isLogin && !username.trim()) {
    authErrors.username = "Please enter a username";
  }

  if (!email.trim()) {
    authErrors.email = "Please enter your email address";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    authErrors.email = "Please enter a valid email address";
  }

  if (!password.trim()) {
    authErrors.password = "Please enter a password";
  }

  if (!isLogin && !confirmPassword.trim()) {
    authErrors.confirmPassword = "Please confirm your password";
  } else if (!isLogin && password !== confirmPassword) {
    authErrors.confirmPassword = "Passwords do not match";
  }

  return authErrors;
};

export default authValidation;
