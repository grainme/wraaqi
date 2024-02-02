import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import axios from "axios";
import { useState,useEffect } from "react";
import Input from "@material-tailwind/react";
import Button from "@material-tailwind/react";
export function Tables() {
  const [admins,setAdmins]=useState([])
  const [commun,setCommun]=useState([])
  const [change,setChange]=useState(false)
  
  useEffect(()=>{
    axios.get("http://localhost:3000/adminc/listOfAdminc")
      .then(response => {
        if (response.status === 200) {
          // Ghadi nmchiw men had lpage lpage akhura
          setCommun(response.data)
          console.log(admins);
        } else {
          console.log("lose"); 
        }
      })
      .catch(error => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
      });
      axios.get("http://localhost:3000/adminl")
      .then(response => {
        if (response.status === 200) {
          // Ghadi nmchiw men had lpage lpage akhura
          setAdmins(response.data)
          console.log(admins);
        } else {
          console.log("lose"); 
        }
      })
      .catch(error => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
      });
  },[change])
  const hundleDelete=(id)=>{
    axios.delete(`http://localhost:3000/adminc/deleteById/${id}`)
    .then(response => {
      if (response.status === 200) {
        setChange(!change)
      } else {
        console.log("lose"); 
      }
    })
    .catch(error => {
      console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
    });
  }
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Admin Logiciel
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Admin","cin", "status", "employed"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {admins.map(
                
                (data, key) => {
                  const className = `py-3 px-5 ${
                    key === admins.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={data.user.firstname}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={"/img/team-2.jpeg"} alt={'d'} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {data.user.firstname+" "+data.user.lastname}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {data.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {data.user.cin}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={data.user.online ? "green" : "blue-gray"}
                          value={data.user.online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {data.employed}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Admin Commun
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Admin","cin", "status", "employed", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {commun.map(
                
                (data, key) => {
                  const className = `py-3 px-5 ${
                    key === admins.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={data.user.firstname}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={"/img/team-2.jpeg"} alt={'d'} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {data.user.firstname+" "+data.user.lastname}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {data.user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {data.user.cin}
                        </Typography>
                      </td> 
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={data.user.online ? "green" : "blue-gray"}
                          value={data.user.online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium w-fit"
                        />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {data.employed}
                        </Typography>
                      </td> 
                      
                      <td className={className}>
                        <button 
                        onClick={()=>{hundleDelete(data.id)}}
                          className="text-xs font-semibold text-red-600"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
