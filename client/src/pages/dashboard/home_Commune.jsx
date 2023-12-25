import React from "react";
import { Typography } from "@material-tailwind/react";

import { StatisticsChart } from "@/widgets/charts";
import { chartsConfig } from "@/configs";
import {useNavigate} from "react-router-dom"
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import Grainme from "./card_grainme";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";

export function HomeCitoyen() {
  const [numUsers, setUsers] = useState(0);
  const [numAdminc, setAdminc] = useState(0);
  const [numAdminl, setAdminl] = useState(0);
  const [numFonct, setFonc] = useState(0);
  const [userCity, setUserC] = useState([]);
  const [city, setCity] = useState([]);
  const [cityN, setCityN] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/numbreOfUsers")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          console.log("lose");
        }
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
    axios
      .get("http://localhost:8080/fonctionnaire/numbreOfFonctionnaire")
      .then((response) => {
        if (response.status === 200) {
          setFonc(response.data);
        } else {
          console.log("lose");
        }
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
    axios
      .get("http://localhost:8080/adminl/numbreOfAmdinls")
      .then((response) => {
        if (response.status === 200) {
          setAdminl(response.data);
        } else {
          console.log("lose");
        }
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
    axios
      .get("http://localhost:8080/adminc/numbreOfAmdincs")
      .then((response) => {
        if (response.status === 200) {
          setAdminc(response.data);
        } else {
          console.log("lose");
        }
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
    axios
      .get("http://localhost:8080/user/countUsersByVille")
      .then((response) => {
        if (response.status === 200) {
          // Assuming response.data is an array of objects
          setUserC(response.data);
          const list1 = [];
          const list2 = [];
          response.data.forEach((item) => {
            var key = Object.keys(item)[0];
            var value = item[key];
            list1.push(key);
            list2.push(value);
          });
          setCity(list1);
          setCityN(list2);
        } else {
          console.log("Request failed with status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }, []);

  const websiteViewsChart = {
    type: "bar",
    height: 220,
    series: [
      {
        name: "Views",
        data: cityN,
      },
    ],
    options: {
      ...chartsConfig,
      colors: "#ffc02b",
      plotOptions: {
        bar: {
          columnWidth: "30%",
          borderRadius: 0,
        },
      },
      xaxis: {
        ...chartsConfig.xaxis,
        categories: city,
      },
    },
  };
  const statisticsChartsData = [
    {
      color: "white",
      title: "Number of users in each city",
      description: "Last Campaign Performance",
      footer: "campaign sent 2 days ago",
      chart: websiteViewsChart,
    },
  ];

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <Grainme role="User" total={numUsers} />
        <Grainme role="Admins communs" total={numAdminc} />
        <Grainme role="Fonctinnaire" total={numFonct} />
        <Grainme role="Admins Logiciel" total={numAdminl} />
      </div>
      <div className="mb-6 flex gap-y-12 gap-x-6 ">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon
                  strokeWidth={2}
                  className="h-4 w-4 text-blue-gray-400"
                />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
        <div className=" text-white bg-black w-[50%] rounded-3xl flex flex-col p-10 items-start  font-CG font-medium justify-between">
          <div className="flex flex-row justify-between w-full">
            <div>
              <div className="text-[45px]">Your Previous</div>
              <div className="my-[-1rem] text-[45px]">Requests</div>
            </div>
            <div
              onClick={() => {
                navigate("/citoyen/requests");
              }}
              className="cursor-pointer font-CG font-medium border-[1px] my-4 rounded-full px-5 h-[2rem] p-2 flex justify-center items-center"
            >
              Enter Here!
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row gap-3">
              <div className="h-[4rem] w-[4rem] bg-[#ffc02b] text-black rounded-full flex justify-center items-center">
                <ArrowTopRightIcon className="h-[3rem] w-[3rem]" />
              </div>
              <div className="h-[4rem] w-[4rem] bg-[#ffc02b] text-black rounded-full flex justify-center items-center">
                <PlusIcon className="h-[3rem] w-[3rem]" />
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-[#ffc02b] rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCitoyen;
