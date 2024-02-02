import React from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export function Notifications() {
  const [email, setEmail] = useState("")
  const [cin, setCin] = useState("")
  const [user, setUser] = useState({}) 
  const onClick = () => {
    const body={
      email:email,
      cin:cin
    }
    axios.post(`http://localhost:3000/users/findUserByEmailAndCin`,body).then(
      (response) => {
        if (response.status == 200) {
             console.log(response.data);
             setUserNotFound(false)
             setUserFound(true)
             const abody={
              user:response.data,
              employed:Date.now
             }
             axios.post("http://localhost:3000/adminc/saveAdminc",abody)
             const emailBody = {
              to: response.data.email,
              subject: "Admin Privileges Update",
              message: `Dear ${response.data.lastname},\n\nI hope this message finds you well. We are delighted to inform you that your status within our community has been updated, and you are now recognized as an administrator.\n\nYour dedication and commitment to our community have been truly appreciated, and we believe that entrusting you with administrative privileges will further enhance our collective experience.\n\nShould you have any questions, require further information, or wish to discuss any community-related matters, please feel free to reach out to us.\n\nThank you for your continued support and contribution to our community.\n\nBest regards.`
          };
          
             axios.post("http://localhost:3000/sendEmail",emailBody)
        }
        else{
          setUserNotFound(true)
          setUserFound(false)
        }
      }
    ).catch(error => {
      setUserNotFound(true)
      setUserFound(false)

    })

  }
  const [userNotFound, setUserNotFound] = useState(false);
  const [userFound,setUserFound]=useState(false)

  return (
    <>
      <div className="w-full lg:w-3/5 mt-24 ml-[10vw] mb-16">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Ajouter Admin Commun </Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Devenez membre chez Wraaqi.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              CIN
            </Typography>
            <Input
              size="lg"
              placeholder="uDDJJQS2323N13"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => { setCin(e.target.value) }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="email.email@gmail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>

          <Button onClick={onClick} className="mt-6" fullWidth>
            Confirm
          </Button>
          {userNotFound ? <div className="flex justify-center items-center text-red-500 m-2 text-[14px] font-semibold">User Not Found!</div> : null}
          {userFound ? <div className="flex justify-center items-center text-green-500 m-2 text-[14px] font-semibold">admin ajouter</div> : null}

        </form>

      </div>
    </>
  );
}

export default Notifications;
