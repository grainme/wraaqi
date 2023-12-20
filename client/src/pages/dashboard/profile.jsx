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
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckIcon } from '@radix-ui/react-icons'



export function Profile() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")));
    return;
  }, [])

  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/profile.jpg')] bg-cover bg-center">
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
                <div className="flex flex-row justify-center items-center gap-1">
                  <Typography variant="h5" color="blue-gray" className="mb-1 font-GS">
                  {user.firstname +" "+user.lastname}
                  </Typography>
                  <div className="bg-yellow-800 rounded-full text-white mb-1">
                    <CheckIcon className="h-4 w-4"/>
                  </div>
                </div>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600 font-GS"
                >
                  Moroccan citizen
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-3 font-GS">
                Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500 font-GS">
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
                            className: "text-sm font-normal text-blue-gray-500 font-GS",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
            <Typography variant="h6" color="blue-gray" className="mb-3 font-GS">
                Profile Informations
            </Typography>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <div>
                  <div className="font-GS font-semibold text-[12px]">First Name</div>
                  <input placeholder={user.firstname} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
                <div>
                  <div className="font-GS font-semibold text-[12px]">Last Name</div>
                  <input placeholder={user.lastname} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="font-GS font-semibold text-[12px]">Email</div>
                  <input placeholder={user.email} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
                <div>
                  <div className="font-GS font-semibold text-[12px]">Gender</div>
                  <input placeholder={user.gender} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="font-GS font-semibold text-[12px]">Nationality</div>
                  <input placeholder={user.nationalite} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
                <div>
                  <div className="font-GS font-semibold text-[12px]">Age</div>
                  <input placeholder={user.age} disabled className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"></input>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <div className="font-GS font-semibold text-[12px]">City</div>
                  <input  className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg" placeholder={user.adresse.ville}></input>
                </div>
                <div>
                  <div className="font-GS font-semibold text-[12px]">Residency</div>
                  <input  className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg" placeholder={user.adresse.residence}></input>
                </div>
              </div>
            </div>
            
            </div>
            
          </div>
          
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;