import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';
import { PersonIcon} from '@radix-ui/react-icons'


function Nisso(){
    return(
        <div className="bg-white flex flex-col w-full rounded-3xl h-[10rem] p-3 px-6 justify-center items-center">
            <div className=" h-10 w-[30%] flex justify-center items-center">
              <h1 className='font-semibold text-[30px]'>How can we help ? </h1>
            </div>
            <div className='bg-white flex justify-center   items-center h-10 w-[30%]  mt-2 '>
              <input className='w-full   h-[80%]  p-4' placeholder='search' >
              </input>
              <MagnifyingGlassCircleIcon onClick={()=>{}} className=' cursor-pointer w-10 h-10 gap-3'></MagnifyingGlassCircleIcon>

            </div>
            
          </div>
    );
}

export default Nisso;