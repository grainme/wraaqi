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
      .post("http://localhost:8080/demandeReclamation/saveDocu", {"name": title, "descriptions": description, "user":user,"uniqueId":Math.floor(Math.random() * 1000001)})
      .then((response) => {
        console.log(response);
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
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-3 font-CG"
              >
                Reclamation Informations
              </Typography>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                  <div>
                    <div className="font-GS font-semibold text-[12px]">
                      User CIN
                    </div>
                    <input
                      placeholder={user.cin}
                      disabled
                      className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"
                    ></input>
                  </div>
                  <div>
                    <div className="font-GS font-semibold text-[12px]">
                      Reclamation Title
                    </div>
                    <input
                      placeholder="Reclamation Title"
                      className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"
                      value={title}
                      onChange={(e)=>{setTitle(e.target.value)}}
                    ></input>
                  </div>
                  <div>
                    <Textarea
                      variant="outlined"
                      label="Reclamation Description"
                      value={description}
                      onChange={(e)=>{setDescription(e.target.value)}}
                    />
                  </div>
                </div>
                <div onClick={sendReclamation} className="cursor-pointer">
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
