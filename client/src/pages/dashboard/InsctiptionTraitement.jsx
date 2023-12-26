import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InscriptionTraitement() {
  const [Inscription, setInscription] = useState({});
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const generatePassword = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };
  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    axios
      .get(
        `http://localhost:8080/demandeInscription/findByuniqueId/${id}`,
      )
      .then((res) => {
        setInscription(res.data);
        console.log(res.data);
      });
      setPassword(generatePassword(10));
  }, []);


  const hundleAccept = () => {
    const send = {
      to: Inscription.email,
      subject: "Accepted Account",
      message: `You've been added to our systems, enjoy the digitalization! Your Password is ${password}`,
    };
    axios.post(`http://localhost:8080/Email/sendEmail`, send).then((res) => {});
    axios.post("http://localhost:8080/user/saveUser", {
      firstname: Inscription.firstname,
      cin: Inscription.cin,
      lastname: Inscription.lastname,
      age: Inscription.age,
      gender: Inscription.gender || null,
      email: Inscription.email,
      password: password,
      role: "Citoyen",
      nationality: Inscription.nationality,
      adresse: {
        num: Inscription.num || null,
        rue: Inscription.rue || null,
        ville: Inscription.ville || null,
        residence: Inscription.residence || null,
      },
      telephone: Inscription.tel || null,
      online: false,
    });
    axios
      .put(
        `http://localhost:8080/demandeInscription/updateStatusDoneWithAccept/${Inscription.id}`,
      )
      .then((res) => {});
  };
  const hundleDecline = () => {
    const send = {
      to: Inscription.email,
      subject: "Denied Account",
      message: "You've been refused, check your informations and retry!",
    };
    axios.post(`http://localhost:8080/Email/sendEmail`, send).then((res) => {});
    axios
      .put(
        `http://localhost:8080/demandeInscription/updateStatusDoneWithDecline/${Inscription.id}`,
      )
      .then((res) => {});
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h1 className="text-3xl font-bold mb-4">Inscription Infos</h1>
      <div className="mb-4">
        <label className="block text-gray-600">CIN:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={Inscription.cin}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Full Name:</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={Inscription.firstname + " " + Inscription.lastname}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Email:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          value={Inscription.email}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Nationality:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          value={Inscription.nationality}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Age:</label>
        <input
          className="w-full p-2 border border-gray-300 rounded-md"
          value={Inscription.age}
          readOnly
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
