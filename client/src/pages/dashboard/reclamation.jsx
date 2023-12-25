import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Switch,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "@/client/supabaseClient";
import axios from "axios";
import { Textarea } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";

export function Reclamation() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [profileImg, setProfileImg] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getImageFromSupabase(user);
    return;
  }, []);

  const sendReclamation = () => {
    axios
      .post("http://localhost:8080/demandeReclamation/saveDocu", {
        name: title,
        descriptions: description,
        user: user,
        uniqueId: Math.floor(Math.random() * 1000001),
      })
      .then((response) => {
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!");
      });
  };

  const getImageFromSupabase = async (user) => {
    const { data, error } = supabase.storage
      .from("wraaqi")
      .getPublicUrl(user.cin + "/avatar.png");
    setProfileImg(data.publicUrl);
  };
  return (
    <>
      <div className="relative mt-8 h-[5rem] w-full overflow-hidden rounded-xl bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-transparent" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 h-[35rem] flex justify-between items-center border border-blue-gray-100">
        <CardBody className="mt-5 p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center w-full">
              <Typography
                color="blue-gray"
                className="mb-3 font-CG font-semibold text-[70px]"
              >
                Reclamation Informations
              </Typography>
              <div className="flex flex-col gap-5 justify-between h-[17rem] w-[40rem]">
                <div className="flex flex-col gap-5 justify-between">
                  <div >
                    <div className="font-GS font-medium mb-2 text-[12px]">
                      User CIN
                    </div>
                    <Input
                      className=" bg-white text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 "
                      placeholder={user.cin}
                      disabled
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                  <div>
                    <div className="font-GS font-semibold text-[12px]">
                      Reclamation Title
                    </div>
                    <Input
                      placeholder="Reclamation Title"
                      className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                  <div>
                    <Textarea
                      variant="outlined"
                      label="Reclamation Description"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div onClick={sendReclamation} className="flex justify-center font-CG font-semibold text-[17px] items-center cursor-pointer">
                  Submit Reclamation
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Reclamation;
