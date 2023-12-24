import React, { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { PlusIcon } from '@radix-ui/react-icons'
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

 
export function DrawerPlacement() {
  const [openBottom, setOpenBottom] = React.useState(false);
  const [email, setEmail] = useState("");
  const [cin, setCin] = useState("");
  const openDrawerBottom = () => setOpenBottom(true);
  const closeDrawerBottom = () => setOpenBottom(false);
  const [commun,setCommun]=useState({});

  const pushAdminCommune = ()=>{
    axios.post("http://localhost:8080/user/findUserByEmailAndCin", {
      "email":email,
      "cin": cin
    })
    .then(response => {
      if (response.status === 200) {
        setCommun(response.data)
        console.log("FINDING DONE!")
      } else {
        notify('unfortunately, we could not find the use!');
        console.log("lose"); 
      }
    })
    .catch(error => {
      notify('User not found!');
      console.error("Kin chi Error somewhere fl CLOUD akhay!", error); 
    });

    axios.post("http://localhost:8080/Email/sendEmail", {"to":email,"subject":"Hiring Accepted","message":"Hello from Wraaqi! You've been hired as an Admine Commune. Congrats!"})
    .then(response => {
      console.log("EMAIL SENT!", response);
    })
    .catch(error => {
      console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
    });

    axios.post("http://localhost:8080/adminc/saveAdminc", {"user":commun})
    .then(response => {
      if (response.status === 200) {
        console.log(commun)
        notify('Admin Commune has been created!')
        closeDrawerBottom();
        console.log("SAVING DONE!")
      } else {
        console.log("lose"); 
      }
    })
    .catch(error => {
      console.error("Kin chi Error somewhere fl CLOUD akhay!", error); 
    });

    
  }

  const notify = (message) => {
    if(message === "Admin Commune has been created!"){
      toast.success(message)
    }
    else{
      toast.error(message)
    }
  };

  return (
    <React.Fragment>

      <div className="flex flex-wrap gap-4 hover:bg-blue-gray-50 p-2 rounded-lg">
        <PlusIcon onClick={openDrawerBottom} className="h-6 w-6 text-black"/>
      </div>
      <Drawer
        placement="bottom"
        open={openBottom}
        onClose={closeDrawerBottom}
        className="p-4 flex flex-col text-white rounded-t-3xl justify-center items-center"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h1" color="blue-gray" className="font-CG">
            Add Admin Commune
          </Typography>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal font-GS">
          Here you can add a new admine commune!
        </Typography>
        <div className="flex gap-2 font-CG">
          <div className="flex flex-row gap-4 font-GS justify-center items-center">
            <input onChange={(e)=>{setCin(e.target.value)}} className="border-2 text-black rounded-lg p-2 font-GS" type="text" placeholder="CIN"></input>
            <input onChange={(e)=>{setEmail(e.target.value)}} className="border-2 text-black rounded-lg p-2 font-GS" type="text" placeholder="Email"></input>
            <div onClick={()=>{pushAdminCommune();}} className="text-black cursor-pointer font-medium font-GS">Submit</div>
          </div>
        </div>
        <div className="font-GS text-[14px] font-semibold text-blue-gray-900">
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </div>

      </Drawer>
      
    </React.Fragment>
  );
}