import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  DocumentCheckIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

export function Profile() {
  const userId=useSelector((store)=>store.user.userId)
  const [user,setUser]=useState({})
  console.log(userId);
  useEffect(()=>{
       axios.get(`http://localhost:3000/users/findById/${userId}`).then((res)=>{
        setUser(res.data)
       })
  },[userId])
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/administration.jpg')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                 {user.firstname +" "+user.lastname}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  Citoyen(e)  Marocain(e) 
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Parametres
                  </Tab>
                <Tab value="app">
                    <DocumentCheckIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Légalisation
                  </Tab>
                  <Tab value="message">
                    <MegaphoneIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Réclamation
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Paramétres
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
                Mes information 
              </Typography>
            <ProfileInfoCard
              details={{
                cin:user.cin,
                nom: user.lastname,
                prenom:user.firstname,
                email: user.email,
                age:user.age,
                adresse: "",
                nationnalite:user.nationality,
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            
            />
            </div>
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Dérniere Connexion
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                  />
                ))}
              </ul>
            </div>
          </div>
          
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;