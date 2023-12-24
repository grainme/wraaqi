import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/client/supabaseClient";
import axios from 'axios';



export function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const [age, setAge] = useState();
  const [nationalite, setNationalite] = useState("");
  const [accdemande,setAccdemande]=useState(false)
  const navigate = useNavigate(); 
  const [profileImg, setProfileImg] = useState("");


  const pushUserInfos = () => {
    UploadSupabase();
    const body = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      cin: cin,
      age: age,
      nationality: nationalite,
      uniqueId:Math.floor(Math.random() * 1000001)
    };
  
    if (age >= 18) {
      // Assuming you want to store the user information in local storage
      localStorage.setItem("user", JSON.stringify(body));

      // If you want to make an API request, uncomment the following code
      axios.post("http://localhost:8080/demandeInscription", body)
        .then(response => {
            console.log("user Added");
            setAccdemande(true)
        })
        .catch((error)=>{
          console.log(error)
        })
  
      // Redirect to the desired page
      navigate("/demandePdf");
    }
  };

  const UploadSupabase = async (e) => {
    const avatarFile = profileImg ; 
    if (avatarFile) {
      const { data, error } = await supabase
        .storage
        .from('wraaqi')
        .upload(cin + "/avatar.png", avatarFile, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Error uploading image:', error);
      } else {
        console.log('Image uploaded successfully:', data);
      }
    } else {
      console.error('No file selected for upload');
    }
  };
  

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/Casa.jpg"
          className="h-[80vh] w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4 font-CG">Rejoignez-nous aujourd'hui</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal font-CG">Entrez votre informations personnelles pour vous inscrire.</Typography>
        </div>
        <form className="mt-5 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Prénom
            </Typography>
            <Input
              size="lg"
              placeholder="Saisir votre prénom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setFirstName(event.target.value) }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Nom
            </Typography>
            <Input
              size="lg"
              placeholder="Saisir votre nom"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setLastName(event.target.value) }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Adresse e-mail
            </Typography>
            <Input
              size="lg"
              placeholder="nom@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setEmail(event.target.value) }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Code d'identité national
            </Typography>
            <Input
              size="lg"
              placeholder="Saisir votre CIN"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setCin(event.target.value) }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Age
            </Typography>
            <Input
              size="lg"
              placeholder="Saisir votre age"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setAge(event.target.value) }}
            />

            <Typography variant="small" color="blue-gray" className="-mb-6 font-medium font-CG">
              Nationalité
            </Typography>
            <Input
              size="lg"
              placeholder="Saisir votre nationalité"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 font-CG"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(event) => { setNationalite(event.target.value) }}
            />
          </div>
          <div className="flex flex-row items-center">
              <input type="file" className="mt-6" onChange={(e) => setProfileImg(e.target.files[0])} />
          </div>  
          <Button className="mt-6" fullWidth onClick={pushUserInfos}>
            Inscrivez-vous maintenant
          </Button>
          {accdemande?<div className="flex justify-center items-center text-green-500 m-2 text-[14px] font-CG font-semibold">demande envoye par succ!</div>:null}

          <div className="space-y-4 mt-8">
          </div>
          <Typography variant="paragraph" className="text-center font-CG text-blue-gray-500 font-medium mt-4">
            Vous avez déjà un compte?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1 font-CG">Connectez-vous</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;