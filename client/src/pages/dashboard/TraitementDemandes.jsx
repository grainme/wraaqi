import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function TraitementDemandes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [demandes, setDemandes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    axios
      .post("http://localhost:8080/fonctionnaire/getFonctionnaire", user)
      .then((response) => {
        axios
          .post(
            "http://localhost:8080/demande/fonctionnaireDemandes",
            response.data,
          )
          .then((response) => {
            console.log("Demande : ",response)
            setDemandes(response.data);
          })
          .catch((error) => {
            console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
          });
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
      });
  }, []);

  const NavigateType = (type, uniqueId) => {
    if (type === "Reclamation") {
      navigate(`../Reclamation?id=${uniqueId}`);
    } else if (type === "Legalisation") {
      navigate(`../Legalisation?id=${uniqueId}`);
    } else {
      navigate(`../Inscription?id=${uniqueId}`);
    }
  };

  return (
    <div className="mt-[2rem]">
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100 font-GS">
          <tr>
            <th className="py-2 px-4 text-left">User</th>
            <th className="py-2 px-4 text-left">Type</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande, index) => {
            return (
                <tr key={index} className="hover:bg-gray-50 font-GS font-medium">
                  <td className="py-2 px-4 flex flex-row gap-3 items-center justify-start">
                    <div onClick={()=>{navigate(`../checkProfile?id=${demande.user.id}`);}} className="cursor-pointer font-medium flex flex-col">
                      <div>{demande.user !== null ? demande.user?.firstname + " " + demande.user?.lastname : "Still Unknown"}</div>
                      <div className="text-[13px] font-GS text-gray-700">{demande.user?.role}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{demande.type === null ? "Inscription" : demande.type}</td>
                  <td className="py-2 px-4">{demande.status}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => {
                        NavigateType(demande.type, demande.uniqueId);
                      }}
                      className="bg-yellow-800 hover:bg-yellow-700 text-white py-1 px-2 rounded"
                    >
                      {demande.type === "Inscription" ? "Complete" : demande.type === "Legalisation" ? "Legalize" : "Fix This"}
                    </button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TraitementDemandes;
