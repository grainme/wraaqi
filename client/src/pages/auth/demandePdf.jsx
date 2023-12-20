import React, { useEffect, useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 12
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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")));
    return;
  }, [])

  const nom = user.lastName;
  const prenom = user.firstName;
  const age = user.age;
  const cin = user.cin;
  const nationalite = user.nationality;
  const email = user.email;
  const tel = "0629330464"

  const title = 'Demande d\'inscription au Wraaqi';
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
  
  Motivation de l'Inscription :\n
  Je suis motivé(e) à m'inscrire à votre application afin de bénéficier des services administratifs offerts aux citoyens marocains. Je suis convaincu(e) que cette plateforme facilitera mes démarches administratives, contribuant ainsi à une meilleure accessibilité aux services publics.\n
  
  Engagement :\n
  Je m'engage à fournir des informations exactes et à jour lors de mon inscription. Je comprends que l'utilisation de cette application est soumise aux conditions générales d'utilisation en vigueur, et je m'engage à respecter ces termes.\n
  
  Je reste à votre disposition pour toute information complémentaire et je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n
  
  Cordialement,
  `;

  return (
    <div className='font-GS'>
      <div className='text-[28px] font-semibold'>Demande d'inscription au Wraaqi</div>
      <h2>Objet : Demande d'Inscription à l'Application Wraaqi</h2>
      <p> Madame, Monsieur,<br/><br/>
        Je me permets de vous adresser la présente demande d'inscription à votre application administrative,
        dans le but de profiter des services mis à disposition pour les citoyens marocains.</p>
      <div className='flex flex-col'>
        <div>Informations Personnelles</div>
        <div>-First Name: {user.firstName}</div>
        <div>-Last Name: {user.lastName}</div>
        <div>-Email: {user.email}</div>
        <div>-CIN: {user.cin}</div>
        <div>-Nationnalité: {user.nationality}</div>
      </div>
      <PDFDownloadLink document={<MyDoc title={title} content={content} />} fileName="demande_inscription.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PDFComponent;
