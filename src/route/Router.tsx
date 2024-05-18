import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import DashboardLayout from "../dashboard/DashboardLayout";
import Seller from "../Seller/Seller";
import DashboardPage from "../DashboardPage";


const Router : React.FC = () => {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <DashboardPage />, index: true },
        { path: 'seller', element: <Seller /> }
      ],
    },
  
  ]);

  return routes;
}

export default Router