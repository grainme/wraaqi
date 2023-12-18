import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { plus } from "@/features/counter/CounterSlice";
export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userNotFound, setUserNotFound] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const onClick = () => {
    const body = {
      email: email,
      password: password,
    };
  
    axios.post("http://localhost:3000/users/checkUser", body)
      .then(response => {
        if (response.status === 200) {
          dispatch(plus(response.data.id))
          navigate("/dashboard/home")
        } else {
          console.log("lose");
          setUserNotFound(true);
        }
      })
      .catch(error => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
        setUserNotFound(true);
      });
  };

  return (
    <section className="m-8 flex gap-4 font-switzer">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Connexion </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Devenez membre chez Wraaqi.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
            Votre email
            </Typography>
            <Input
              size="lg"
              placeholder="user@wraaqi.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Mot de passe
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          
          <Button onClick={onClick} className="mt-6" fullWidth>
              connexion
          </Button>
          {userNotFound?<div className="flex justify-center items-center text-red-500 m-2 text-[14px] font-semibold">User Not Found!</div>:null}

          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900">
              <a href="#">
              Mot de passe oublié?
              </a>
            </Typography>
          </div> 
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
          Pas encore inscrit ?<Link to="/auth/sign-up" className="text-gray-900 ml-1">Faites une demande</Link>
          </Typography>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/Casa.jpg"
          className="h-[90vh] w-full object-cover rounded-3xl"
        />
      </div>

    </section>
  );
}

export default SignIn;
