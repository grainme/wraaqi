import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { QuestionMarkCircleIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="font-CG relative flex h-screen content-center items-center justify-center pt-16 pb-32 font-switzer">
        <div className="absolute top-0 h-full w-full bg-[url('/img/Casa.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-0 h-full w-full bg-black/70 bg-cover bg-center">
          <div className="flex flex-grow justify-between items-center text-white m-4 mx-[7rem]">
            <div>
              <Link to="./auth/sign-in">
                <img
                  src="/public/img/WraaqiNav.png"
                  style={{ maxWidth: "300px", maxHeight: "100px" }}
                  alt="Logo"
                ></img>
              </Link>
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <Link to="/auth/sign-in">Solutions</Link>
              </div>
              <div>
                <Link to="/auth/sign-up">Products</Link>
              </div>
              <div>
                <Link to="/auth/sign-up">À propos</Link>
              </div>
              <div>
                <Link to="/auth/sign-up">OpenSource</Link>
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="bg-white text-black rounded-lg p-1 px-2">
                <Link to="/auth/sign-in">Connexion</Link>
              </div>
              <div className="p-1">
                <Link to="/auth/sign-up">Inscription</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-CG font-semibold"
              >
                <span>
                  {" "}
                  Digitalisation des signatures et des copies conformes
                </span>
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-CG opacity-97 "
              >
                Explorez WRAAQI et sa vision avant-gardiste : la digitalisation
                révolutionnaire des signatures et des copies conformes,
                repoussant les limites de l'efficacité.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <QuestionMarkCircleIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold font-CG"
                color="blue-gray"
              >
                C'EST QUOI ?
              </Typography>
              <Typography className="mb-8 font-normal font-CG text-blue-gray-500">
                WRAAQI révolutionne la légalisation en numérisant les signatures
                et les copies pour une conformité sans faille. Simplifiez vos
                processus administratifs avec une gestion efficace des
                documents, offrant une expérience sécurisée et moderne.
                <br />
                <br />
                WRAAQI représente bien plus qu'une simple plateforme de
                digitalisation. C'est une solution complète qui redéfinit la
                manière dont les processus administratifs liés à la légalisation
                des signatures et des copies conformes sont abordés, avec un
                engagement envers l'efficacité, la sécurité et la conformité.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/maroc_royaume.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-CG"
                  >
                    Enterprise
                  </Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold font-CG"
                  >
                    Wraaqi qui?
                  </Typography>
                  <Typography className="font-normal font-CG text-blue-gray-500">
                    WRAAQI révolutionne la légalisation en numérisant les
                    signatures et les copies pour une conformité sans faille.
                    Simplifiez vos processus administratifs avec une gestion
                    efficace des documents, offrant une expérience sécurisée et
                    moderne.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 px-4 font-CG">
        <div className="container mx-auto font-CG">
          <PageTitle
            className="font-CG"
            section="Philosophie"
            heading="En train de généraliser..."
          >
            La plateforme WRAAQI permet un accès à distance aux services de
            légalisation de signatures, de certification de copies conformes et
            d'admission temporaire en attendant l'intégration d'autres services
            administratifs.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center font-CG text-blue-gray-900"
              >
                <div className="mx-auto font-CG mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 font-CG"
                >
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500 font-CG">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Contactez-nous" heading="Probléme Technique!">
            Remplissez ce formulaire, et nous vous répondrons dans les 24
            heures.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal font-CG"
                >
                  J'acccepte
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900 font-CG"
                  >
                    &nbsp;les termes!
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button
              variant="gradient"
              size="lg"
              className="mt-8 font-CG text-[16px] tracking-wider"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;