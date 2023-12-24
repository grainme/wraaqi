import axios from "axios";
import { useEffect, useState } from "react";
import { supabase } from "@/client/supabaseClient";
import { useNavigate } from "react-router-dom";


export function TraitementDemandes() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [demandes, setDemandes] = useState([]);
  const [displayTables, setDisplayTables] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

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
    <div className="flex justify-center items-center">
      {displayTables ? (
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 text-left">User</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {demandes.map((demande, index) => {
              const { data, error } = supabase.storage
                .from("wraaqi")
                .getPublicUrl(user.cin + "/avatar.png");
              return (
                demande.type !== null && (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4">
                      <img
                        src={data.publicUrl}
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                      ></img>
                    </td>
                    <td className="py-2 px-4">{demande.type}</td>
                    <td className="py-2 px-4">{demande.status}</td>
                    <td className="py-2 px-4">
                      <button onClick={()=>{NavigateType(demande.type, demande.uniqueId)}} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                        Fix It
                      </button>
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      ) : (
        <button
          onClick={fetchTables}
          className="bg-white p-4 text-black rounded-lg font-GS"
        >
          Fetch Tables
        </button>
      )}
    </div>
  );
}

export default TraitementDemandes;
