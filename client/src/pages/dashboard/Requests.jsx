import axios from "axios";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export function CitoyenRequests() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [displayTables, setDisplayTables] = useState(false);
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getDemandes();
    return;
  }, []);

  const getDemandes = () => {
    setDisplayTables(!displayTables);
    axios
      .post("http://localhost:8080/demande/userDemandes", user)
      .then((response) => {
        setDemandes(response.data);
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
  };

  console.log(demandes);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[40px] font-CG font-semibold mt-2">Previous Requests</div>
      <table className="min-w-full bg-white border border-gray-300 mt-8 shadow-md font-GS">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Name
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Date
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Status
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Response
            </th>
            <th className="py-3 px-4 text-left font-semibold text-gray-700">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {demandes.map(
            (demande, index) =>
              demande.demendeDate !== null &&
              demande.type !== null && (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{demande.name}</td>
                  <td className="py-3 px-4">
                    {format(
                      new Date(demande.demendeDate),
                      "MMMM d, yyyy HH:mm:ss",
                    )}
                  </td>
                  <td className="py-3 px-4">{demande.status}</td>
                  <td className="py-3 px-4">
                    {demande.response !== null
                      ? demande.response
                      : "En Cours de traitement"}
                  </td>
                  <td className="py-3 px-4">{demande.type}</td>
                </tr>
              ),
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CitoyenRequests;
