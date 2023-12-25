import { Input, Textarea,Checkbox,Typography,Button} from "@material-tailwind/react";
import React from "react";
export function Report (){
    return(
    <form className="mx-auto w-full mt-12 lg:w-5/12">
        <div className="font-SG font-bold text-[30px] flex justify-center">
            Do have a technical problem?
        </div>
        <div className="font-SG text-blue-gray-700  text-[15px]   flex justify-center">
            Fill the form for a help!
        </div>
        <div className="mt-3 mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Title" />
              
        </div>
            <Textarea variant="outlined" size="lg" label="Description of your technical problem" rows={8} />
            
            <Button
              variant="gradient"
              size="lg"
              className="mt-8 font-CG text-[16px] tracking-wider"
              fullWidth
            >
              Send Message
            </Button>
          </form>
    );
}
export default Report ;