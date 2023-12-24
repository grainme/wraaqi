import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
} from "@material-tailwind/react";
import axios from "axios";
import { useState,useEffect } from "react";

export function Tables() {
  const [admins,setAdmins]=useState([]);
  const [commun,setCommun]=useState([]);
  const [change,setChange]=useState(false);
  const [showNewAdminComponent, setShowNewAdminComponent] = useState(false);

  const handleNewAdminClick = () => {
    setShowNewAdminComponent(true);
  };
  
  useEffect(()=>{
    axios.get("http://localhost:8080/adminc/listOfAdminc")
      .then(response => {
        if (response.status === 200) {
          // Ghadi nmchiw men had lpage lpage akhura
          setCommun(response.data)
        } else {
          console.log("lose"); 
        }
      })
      .catch(error => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
      });
      axios.get("http://localhost:8080/adminl/listeOfAdminsL")
      .then(response => {
        if (response.status === 200) {
          // Ghadi nmchiw men had lpage lpage akhura
          setAdmins(response.data)
        } else {
          console.log("lose"); 
        }
      })
      .catch(error => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!"); 
      });
  },[change])
  const hundleDelete=(id)=>{
    axios.delete(`http://localhost:8080/adminc/deleteById/${id}`)
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
    <div className="mt-12 mb-8 flex flex-col gap-12 ">
      <Card>
        <CardHeader color="gray" className="mb-8 p-6">
          <Typography variant="h5" color="white"  className="font-CG">
            Admin Logiciel
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto font-GS">
            <thead>
              <tr>
                {["Admin","cin", "status", "employed"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left font-GS"
                  >
                    <Typography
                      variant="small"
                      className="text-[12px] font-medium uppercase text-black font-GS"
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
                            <Typography className="text-[12px] font-medium font-GS text-blue-gray-900">
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
        <CardHeader color="gray" className="mb-8 p-6 flex flex-row items-center justify-between">
          <Typography variant="h5" color="white" className="font-CG">
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
                      className="text-[12px] font-medium uppercase text-black font-GS"
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
                  const className = `py-3 font-GS px-5 ${
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
                              className="font-semibold font-GS"
                            >
                              {data.user.firstname+" "+data.user.lastname}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500 font-GS">
                              {data.user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600 font-GS">
                          {data.user.cin}
                        </Typography>
                      </td> 
                      <td className={className}>
                        <Chip
                          value={data.user.online ? "online" : "offline"}
                          className={`py-0.5 px-2 font-GS text-[11px] font-medium w-fit ${data.user.online ? "bg-green-500" : "bg-blue-green-500"}`}
                          />
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600 font-GS">
                          {data.employed}
                        </Typography>
                      </td> 
                      
                      <td className={className}>
                        <button 
                        onClick={()=>{hundleDelete(data.id)}}
                          className="text-[15px] font-semibold font-GS text-white bg-red-500 hover:bg-red-600 px-3 py-[1px] rounded-lg"
                        >
                          Delete
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
