import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
} from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";
import Grainme from "./card_grainme";
import { ArrowTopRightIcon, RocketIcon } from '@radix-ui/react-icons'
import {useNavigate} from "react-router-dom"

export function HomeCommune() {
  const navigate = useNavigate();
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <Grainme role="User" total="13265"/>
      <Grainme role="Civil servant" total="27365"/>
      <Grainme role="Admins" total="89835"/>
      <Grainme role="Administration" total="42265"/>
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
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
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
                  <div onClick={()=>{navigate("/citoyen/profile")}} className="cursor-pointer font-CG font-medium border-[1px] my-4 rounded-full px-5 h-[2rem] p-2 flex justify-center items-center">
                    Enter Here!
                  </div>
              </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row gap-3">
              <div className="h-[4rem] w-[4rem] bg-[#ffc02b] text-black rounded-full flex justify-center items-center">
                <ArrowTopRightIcon className="h-[3rem] w-[3rem]"/>
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

export default HomeCommune;
