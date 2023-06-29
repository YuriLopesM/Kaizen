import { Navigate, Outlet } from "react-router-dom";
import { useAuth, useHeaderTitle } from "../../../hooks";
import { Header, Layout, Menu } from "../..";

import { ReactComponent as Home } from '../../../assets/icons/home.svg'
import { ReactComponent as User } from '../../../assets/icons/user.svg'
import { ReactComponent as Settings } from '../../../assets/icons/settings.svg'


export const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();
  const { title } = useHeaderTitle();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout
      headerComponent={<Header title={title} />}
      menuComponent={
        <Menu
          routes={[{
            path: '/dashboard',
            icon: <Home />
          }, {
            path: '/profile',
            icon: <User />
          }, {
            path: '/settings',
            icon: <Settings />
          }]}
        />
      }
    >
      <Outlet />
    </Layout>
  )
};