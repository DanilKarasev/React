import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { authSelector } from "../../Store/Auth/selectors";

export const RegisterResult = () => {
  const { loading, message } = useSelector(authSelector);
  if (loading) {
    return (
      <div className={"Result"}>
        <CircularProgress />
      </div>
    );
  } else if (message) {
    return (
      <div className={"Result"}>
        <div className={"Error"}>{message}</div>
      </div>
    );
  } else return <div className={"Result"}> </div>;
};
