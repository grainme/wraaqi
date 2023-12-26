import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Switch,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { supabase } from "@/client/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

export function Legalisation() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [File, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const filename = uuidv4();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    return;
  }, []);

  const sendLegalisation = () => {
    
    axios
      .post("http://localhost:8080/demandeLegalisation/saveDocu", {
        fileContent: File.name,
        descriptions: description,
        user: user,
        uniqueId: Math.floor(Math.random() * 1000001),
      })
      .then((response) => {
        // console.log(response.data.fonctionnaire.user);
        UploadSupabase(response.data.fonctionnaire.user);
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
      });
  };

  const UploadSupabase = async (user) => {
    const avatarFile = File;
    if (avatarFile) {
      const { data, error } = await supabase.storage
        .from("wraaqi")
        .upload(user.cin + "/documents" + "/" + File.name, avatarFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        console.error("Error uploading File:", error);
      } else {
        console.log("File uploaded successfully:", data);
      }
    } else {
      console.error("No file selected for upload");
    }
  };

  return (
    <>
      <div className="relative mt-8 h-[5rem] w-full overflow-hidden rounded-xl bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-transparent" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 h-[35rem] flex justify-between items-center border border-blue-gray-100">
        <CardBody className="p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <Typography
                color="blue-gray"
                className="mb-3 font-CG font-semibold text-[100px]"
              >
                Legalisation Window
              </Typography>
              <div className="flex flex-col gap-5 justify-between h-[17rem] w-[40rem]">
                <div className="flex flex-col gap-5 justify-between">
                  <div>
                    <div className="font-GS font-medium mb-2 text-[12px]">
                      Upload file to legalise it!
                    </div>
                    <Input
                      type="file"
                      className=" bg-white text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 "
                      onChange={(e) => setFile(e.target.files[0])}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                  <div>
                    <div className="font-GS font-medium mb-2 text-[12px]">
                      Why do you want to legalize it?
                    </div>
                    <Textarea
                      type="text"
                      className=" bg-white text-gray-900  ring-4 ring-transparent placeholder:text-gray-500 "
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      containerProps={{ className: "min-w-[100px]" }}
                    />
                  </div>
                </div>
                <div onClick={sendLegalisation} className="flex justify-center font-CG font-semibold text-[17px] items-center cursor-pointer">
                  Submit Legalisation
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Legalisation;
