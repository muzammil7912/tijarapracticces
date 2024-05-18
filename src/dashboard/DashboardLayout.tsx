
import  React  from "react";


type DashboardLayoutProps = {
    children: React.ReactNode;
  };
const DashboardLayout : React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
   <div className="dashboard grid ">
        <div className="">{children}</div>
   </div>
  )
}

export default DashboardLayout