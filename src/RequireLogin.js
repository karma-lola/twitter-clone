import { Navigate } from "react-router";

const RequireLogin = ({ isLoggedIn, children }) => {
  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  if (!token && !id) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireLogin;
