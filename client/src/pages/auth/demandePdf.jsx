import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 12,
  },
});

const MyDoc = ({ title, content }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </Page>
  </Document>
);

const PDFComponent = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    return;
  }, []);

  const nom = user.lastName;
  const prenom = user.firstName;
  const age = user.age;
  const cin = user.cin;
  const nationalite = user.nationality;
  const email = user.email;
  const image = user.imageUrl;
  const tel = user.tel;

  const title = "Demande d'inscription au Wraaqi";
  const content = `Objet : Demande d'Inscription à l'Application Wraaqi

  Madame, Monsieur,
  
  Je me permets de vous adresser la présente demande d'inscription à votre application administrative,\n dans le but de profiter des services mis à disposition pour les citoyens marocains.\n
  
  Informations Personnelles :\n
  - Nom : ${nom}\n
  - Prénom : ${prenom}\n
  - Age : ${age}\n
  - CIN : ${cin}\n
  - Adresse : ${nationalite}\n
  - Tel : ${tel}\n
  - Adresse Email : ${email}\n
  
  Motivation de l'Inscription :
  Je suis motivé(e) à m'inscrire à votre application afin de bénéficier des services administratifs offerts aux citoyens marocains. Je suis convaincu(e) que cette plateforme facilitera mes démarches administratives, contribuant ainsi à une meilleure accessibilité aux services publics.\n
  
  Engagement :\n
  Je m'engage à fournir des informations exactes et à jour lors de mon inscription. Je comprends que l'utilisation de cette application est soumise aux conditions générales d'utilisation en vigueur, et je m'engage à respecter ces termes.\n
  
  Je reste à votre disposition pour toute information complémentaire et je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n
  
  Cordialement,
  `;

  return (
    <div className="font-GS font-size-15 flex flex-col justify-center items-center bg-gray-100 p-4 h-[100vh]  border rounded-lg  font-weight-00">
      <div className="text-[28px] font-semibold color-blue underline flex justify-center text-[#ffc02b]">
        Demande d'inscription au Wraaqi
      </div>
      <div className="mx-[5rem]">
        <h2 className="font-semibold underline">
          <br />
          Objet : Demande d'Inscription à l'Application Wraaqi
        </h2>
        <br />
        <p>
          {" "}
          Madame, Monsieur,
          <br />
          Je me permets de vous adresser la présente demande d'inscription à
          votre application administrative, dans le but de profiter des services
          mis à disposition pour les citoyens marocains.
        </p>
        <div className="flex flex-col">
          <br />
          <div className=" underline font-semibold">
            Informations Personnelles :
          </div>
          <br />
          <div>*First Name: {user.firstName}</div>
          <div>*Last Name: {user.lastName}</div>
          <div>*Email: {user.email}</div>
          <div>*CIN: {user.cin}</div>
          <div>*Nationnalité: {user.nationality}</div>
          <div>*Email: {user.email}</div>
          <div>*tel: 0693884461</div>
          <br />
          <p className=" underline font-semibold">
            Motivation de l'Inscription :
          </p>
          <br />
          <p>
            {" "}
            Je suis motivé(e) à m'inscrire à votre application afin de
            bénéficier des services administratifs offerts aux citoyens
            marocains. Je suis convaincu(e) que cette plateforme facilitera mes
            démarches administratives, contribuant ainsi à une meilleure
            accessibilité aux services publics.
          </p>
          <br />
          <p className=" underline font-semibold"> Engagement :</p>
          <br />
          <p>
            {" "}
            Je reste à votre disposition pour toute information complémentaire
            et je vous prie d'agréer, Madame, Monsieur, l'expression de mes
            salutations distinguées.
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center justify-center">
          <PDFDownloadLink
            className="p-1 rounded-full flex justify-center mt-6"
            document={<MyDoc title={title} content={content} />}
            fileName="demande_inscription.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <h1 className="bg-[#ffc02b] w-36 flex item-center justify-center font-medium rounded-lg p-4">
                  Loading document...!
                </h1>
              ) : (
                <h1 className="bg-[#ffc02b] w-36 flex item-center justify-center font-medium rounded-lg p-4">
                  Dowload now!
                </h1>
              )
            }
          </PDFDownloadLink>
          <button onClick={()=>{navigate("/")}} className="bg-[#ffc02b] h-[3rem] px-3 mt-5 flex items-center justify-center rounded-lg font-medium">
            GoBack
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFComponent;
