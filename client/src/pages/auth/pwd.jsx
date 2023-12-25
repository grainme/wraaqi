import { Input, Typography, Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Pwd() {
  const [email, setEmail] = useState("");
  const [npassword, setNPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");
  const [random, setRandom] = useState(
    Math.floor(100000 + Math.random() * 900000),
  );
  const [code, setCode] = useState(0);
  const [bottonContent, setBottonContent] = useState("send Email");

  useEffect(() => {}, [bottonContent]);

  const navigate = useNavigate();

  const onClick = () => {
    if (bottonContent == "send Email") {
      const body = {
        to: email,
        subject: "Your New Email Password",
        message: `Dear user,\n
       We hope this email finds you well. It appears that you have requested to reset your password for your Wraaqi account. 
        To proceed with resetting your password, please use the following one-time verification code:${random}`,
      };
      axios
        .post("http://localhost:8080/Email/sendEmail", body)
        .then((res) => {
          setBottonContent("send the code");
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (bottonContent == "send the code") {
      if (random == code) {
        setBottonContent("change password");
      }
    } else if (bottonContent == "change password") {
      if (npassword == confirmPassword) {
        axios
          .post("http://localhost:8080/users/", body)
          .then((res) => {
            setBottonContent("send the code");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <section className="m-8 flex gap-4 font">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold font-CG mb-4">
            Password forgotten
          </Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            {bottonContent == "send Email" ? (
              <>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-CG font-medium"
                >
                  Enter your Email
                </Typography>
                <Input
                  size="lg"
                  placeholder="user@wraaqi.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </>
            ) : (
              <></>
            )}
            {bottonContent == "send the code" ? (
              <>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-CG font-medium"
                >
                  enter your code
                </Typography>
                <Input
                  size="lg"
                  placeholder="user@wraaqi.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </>
            ) : (
              <></>
            )}
            {bottonContent == "change password" ? (
              <>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-CG font-medium"
                >
                  enter new password
                </Typography>
                <Input
                  size="lg"
                  placeholder="user@wraaqi.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setNPassword(e.target.value);
                  }}
                />
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-3 font-CG font-medium"
                >
                  confirm password
                </Typography>
                <Input
                  size="lg"
                  placeholder="user@wraaqi.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  onChange={(e) => {
                    setCPassword(e.target.value);
                  }}
                />
              </>
            ) : (
              <></>
            )}

            <Button onClick={onClick} className="mt-6" fullWidth>
              {bottonContent}
            </Button>
          </div>
        </form>
      </div>

      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/Casa.jpg"
          className="h-[90vh] w-full object-cover rounded-3xl"
        />
      </div>
    </section>
  );
}

export default Pwd;
