import { supabase } from "@/client/supabaseClient";
import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import pdfFile from "/public/img/test.pdf"
import Signature from "/public/img/WraaqiLogo.jpg"


export default function LegalisationTraitement() {
  const [pdf, setPdf] = useState({});
  const [publicUrl, setPublicUrl] = useState({});

  const displayPdf = () => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    axios
      .get(`http://localhost:8080/demandeLegalisation/findByUniqueId/${id}`)
      .then((res) => {
        setPdf(res.data);
      });

    getPdfFromSupabase();
  };

  const getPdfFromSupabase = async () => {
    console.log("PDF : ", pdf);
    const { data, error } = supabase.storage
      .from("wraaqi")
      .getPublicUrl(pdf.user.cin + "/documents" + "/" + pdf.fileContent);
    setPublicUrl(data);
    if (error) {
      console.error("Error uploading File:", error);
    } else {
      console.log("File uploaded successfully:", data);
    }
  }; 
  const legaliserPdf = () => {
    const formData = new FormData();
    formData.append("pdfFile", pdfFile); 
    formData.append("imageFile", Signature); 
  
    axios.post("http://localhost:8080/pdfController", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      // Handle the response
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "modified.pdf";
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });
  };
  

  return (
    <div>
      <button onClick={displayPdf}>Display Pdf</button>
      <button onClick={legaliserPdf}>Legaliser Pdf</button>

      <div>
        <iframe src={publicUrl.publicUrl} width="100%" height="500px" />
      </div>
    </div>
  );
}
