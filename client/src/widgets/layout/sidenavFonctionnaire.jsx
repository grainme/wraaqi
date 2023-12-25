import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMaterialTailwindController } from "@/context";
import {
  DashboardIcon,
  PersonIcon,
  TableIcon,
  ExitIcon,
  InfoCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

export function SidenavFonctionnaire({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const navigate = useNavigate();
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    return;
  }, []);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/auth/sign-in");
  };

  const fetchTables = () => {
    setDisplayTables(!displayTables);
    axios
      .post("http://localhost:8080/fonctionnaire/getFonctionnaire", user)
      .then((response) => {
        axios
          .post(
            "http://localhost:8080/demande/fonctionnaireDemandes",
            response.data,
          )
          .then((response) => {
            setDemandes(response.data);
          })
          .catch((error) => {
            console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
          });
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
      });
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className="flex flex-row items-center gap-1 m-6">
        <img className="bg-black" src="/img/WraaqiLogo_1.png" width="25%"></img>

        <div className="font-GS text-left">
          <div className="text-[35px] font-CG font-medium mb-[-.5rem]">
            elcome
          </div>
          <div className="text-[17px]">Back, {user.firstname}!</div>
        </div>
      </div>
      <div className="m-6 flex flex-col gap-4 font-GS font-medium tracking-tight">
        <div className="font-semibold my-3">Basic</div>
        <div className="flex flex-row items-center gap-3">
          <DashboardIcon className="text-gray-800" />
          <Link to="./home">Overview</Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <PersonIcon className="text-gray-800" />
          <Link to="./profile">Profile</Link>
        </div>
        <div onClick={fetchTables} className="flex flex-row items-center gap-3">
          <TableIcon className="text-gray-800" />
          <Link to="./traitement">Traitement Demandes</Link>
        </div>

        <div className="font-semibold my-3">Support</div>
        <div className="flex flex-row items-center gap-3">
          <InfoCircledIcon className="text-gray-800" />
          <Link to="./help">Help</Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <ExclamationTriangleIcon className="text-gray-800" />
          <Link to="./Report">Report</Link>
        </div>
        <div className="flex flex-row items-center gap-3">
          <ExitIcon className="text-red-700" />
          <div className="text-red-700 cursor-pointer" onClick={handleLogOut}>
            Log Out
          </div>
        </div>
      </div>
    </aside>
  );
}

SidenavFonctionnaire.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "WRAAQI",
};

SidenavFonctionnaire.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SidenavFonctionnaire.displayName = "/src/widgets/layout/sidnaveCitoyen.jsx";

export default SidenavFonctionnaire;
