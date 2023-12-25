import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReclamationTraitement() {
  const [reclamation, setReclamation] = useState({});
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    console.log("ID from the URL:", id);
    axios
      .get(`http://localhost:8080/demandeReclamation/findByUnique/${id}`)
      .then((res) => {
        setReclamation(res.data);
        console.log(res.data);
      });
    axios
      .put(
        `http://localhost:8080/demandeReclamation/updateStatusDoing/${reclamation.id}`,
      )
      .then((res) => {});
  }, []);

  const hundleAccept = () => {
    const send = {
      to: "boufaroujmarouan@gmail.com",
      subject: subject,
      message: body,
    };
    axios.post(`http://localhost:8080/Email/sendEmail`, send).then((res) => {});
    axios
      .put(
        `http://localhost:8080/demandeReclamation/updateStatusDoneWithAccepted/${reclamation.id}`,
      )
      .then((res) => {});
  };
  const hundleDecline = () => {
    const send = {
      to: "boufaroujmarouan@gmail.com",
      subject: subject,
      message: body,
    };
    axios.post(`http://localhost:8080/Email/sendEmail`, send).then((res) => {
      setReclamation(res.data);
      console.log(res.data);
    });
    axios
      .put(
        `http://localhost:8080/demandeReclamation/updateStatusDoneWithDeline/${reclamation.id}`,
      )
      .then((res) => {
        setReclamation(res.data);
        console.log(res.data);
      });
  };
  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Reclamation Infos</h1>
      <div className="mb-4">
        <label className="block text-gray-600">Name:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={reclamation.name || ""}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600">Demande Date:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={reclamation.demendeDate}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Descriptions:</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          value={reclamation.descriptions || ""}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Subject:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(val) => setSubject(val.target.value)}
          placeholder="Subject"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Body:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="body"
          onChange={(val) => setBody(val.target.value)}
        />
      </div>
      <div className="mb-4 gap-7 flex flex-row justify-center items-center">
        <button
          onClick={() => {
            hundleAccept();
            navigate("../traitement");
          }}
          className="bg-yellow-700 hover:bg-yellow-800 rounded-lg px-5 py-2 text-white"
        >
          Accept
        </button>
        <button
          onClick={() => {
            hundleDecline();
            navigate("../traitement");
          }}
          className="bg-yellow-700 hover:bg-yellow-800 rounded-lg px-5 py-2 text-white"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
