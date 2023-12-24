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
    UploadSupabase();
    axios
      .post("http://localhost:8080/demandeLegalisation/saveDocu", {
        fileContent: File.name,
        descriptions: description,
        user: user,
        uniqueId: Math.floor(Math.random() * 1000001),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Kin chi Error somewhere fl CLOUD akhay!", error);
      });
  };

  const UploadSupabase = async (e) => {
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
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-3 font-CG"
              >
                Legalisation Window
              </Typography>
              <div className="flex flex-col gap-5">
                <div className="flex flex-row gap-5">
                  <div>
                    <div className="font-GS font-semibold text-[12px]">
                      Upload file to legalise it!
                    </div>
                    <input
                      type="file"
                      className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"
                      onChange={(e) => setFile(e.target.files[0])}
                    ></input>
                  </div>
                  <div>
                    <div className="font-GS font-semibold text-[12px]">
                      Why do you want to legalize it?
                    </div>
                    <input
                      type="text"
                      className="bg-transparent border-2 pr-10 pl-2 py-1 rounded-lg"
                      onChange={(e) => setDescription(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div onClick={sendLegalisation} className="cursor-pointer">
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
