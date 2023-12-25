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
import TraitementDemandes from "./pages/dashboard/TraitementDemandes";
import HomeFonctionnaire from "./pages/dashboard/home_Fonctionnaire";
import LegalisationTraitement from "./pages/dashboard/legalistionTraitement";
import ReclamationTraitement from "./pages/dashboard/reclamationTraitement";
import InscriptionTraitement from "./pages/dashboard/InsctiptionTraitement";
import CheckProfile from "./pages/dashboard/checkProfile";
import Report from "./pages/dashboard/report";
import Help from "./pages/dashboard/help";
  
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
          element: <HomeFonctionnaire />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "profile",
          path: "/profile",
          element: <Profile />,
        },
        {
          icon: <TableCellsIcon {...icon} />,
          name: "tables",
          path: "/traitement",
          element: <TraitementDemandes />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "notifications",
          path: "/notifications",
          element: <Notifications />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "Inscription",
          path: "/Inscription",
          element: <InscriptionTraitement />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "Legalisation",
          path: "/Legalisation",
          element: <LegalisationTraitement />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "Reclamation",
          path: "/Reclamation",
          element: <ReclamationTraitement />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "checkProfile",
          path: "/checkProfile",
          element: <CheckProfile />,
        },
        {
          icon: <InformationCircleIcon {...icon} />,
          name: "help",
          path: "/help",
          element: <Help />,
        },
  
        {icon: <InformationCircleIcon {...icon} />,
        name: "Report",
        path: "/Report",
        element: <Report />
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
  