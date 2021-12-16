import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { ROUTES } from "./constants";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Chats } from "../Screens/Chats";
import { Dictionary } from "../Screens/Dictionary";
import { SignIn } from "../Screens/SignIn";
import "./Router.sass";
import { CircularProgress } from "@mui/material";
import { PrivateRoute } from "../Components/PrivateRoute";
import { PublicRoute } from "../Components/PublicRoute";
import { useSelector } from "react-redux";
import { authSelector } from "../Store/Auth/selectors";

export const Router = () => {
  const { loading } = useSelector(authSelector);
  // Если без localStorage
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  if (loading) {
    return (
      <BrowserRouter>
        <div className={"Loading"}>
          <CircularProgress />
        </div>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={ROUTES.HOME} render={() => <Home />} />
          <PrivateRoute
            exact
            path={ROUTES.PROFILE}
            render={() => <Profile />}
          />
          <PublicRoute exact path={ROUTES.SIGN_IN} render={() => <SignIn />} />
          <PrivateRoute path={ROUTES.CHATS} render={() => <Chats />} />
          <PrivateRoute
            path={ROUTES.DICTIONARY}
            render={() => <Dictionary />}
          />
          <PrivateRoute>
            <Redirect to={ROUTES.HOME} />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    );
  }
};
