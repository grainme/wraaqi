import { PersonIcon} from '@radix-ui/react-icons'


function Grainme(props){
    return(
        <div className="bg-white flex flex-col rounded-3xl h-[10rem] p-3 px-6 justify-between items-center">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="bg-gray-200 p-2 rounded-full">
                <PersonIcon className="w-5 h-5 text-black rounded-lg"/>
              </div>
              <div className="bg-[#ffca4d] h-5 rounded-full p-1 text-black text-[14px] font-medium font-GS flex justify-center items-center">+12,4%</div>
            </div>
            <div className="text-black w-full flex flex-col justify-between font-GS">
              <div className="text-gray-600 font-semibold text-[14px]">
                Total {props.role}
              </div>
              <div className="flex flex-row gap-4 items-center">
                <div className="text-[35px] font-semibold">{props.total}</div>
                <div className="text-gray-600 text-[13px]">{props.role} vs last<br/>month</div>
              </div>
            </div>  
          </div>
    );
}

export default Grainme;