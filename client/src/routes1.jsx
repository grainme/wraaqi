import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
  } from "@heroicons/react/24/solid";
  import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
  import { SignIn, SignUp } from "@/pages/auth";
import HomeCitoyen from "./pages/dashboard/home_citoyen";
import { Reclamation } from "./pages/dashboard/reclamation";
import Legalisation from "./pages/dashboard/legalisation";
import CitoyenRequests from "./pages/dashboard/Requests";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "dashboard",
          path: "/home",
          element: <HomeCitoyen />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "/profile",
          element: <Profile />,
        },
        {
          icon: <TableCellsIcon {...icon} />,
          name: "reclamation",
          path: "/reclamation",
          element: <Reclamation/>,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "legalisation",
          path: "/legalisation",
          element: <Legalisation />, // Legalisation Component
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "Requests",
          path: "/Requests",
          element: <CitoyenRequests/>,
        }
      ],
    },
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          icon: <ServerStackIcon {...icon} />,
          name: "sign in",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          icon: <RectangleStackIcon {...icon} />,
          name: "sign up",
          path: "/sign-up",
          element: <SignUp />,
        },
      ],
    },
  ];
  
  export default routes;
  