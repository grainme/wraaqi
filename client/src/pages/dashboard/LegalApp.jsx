import { supabase } from "@/client/supabaseClient";
import axios from "axios";
import { useState, useRef } from "react";

export default function LegalisationTraitement() {
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState("");
  const [publicUrl, setPublicUrl] = useState({});
  const downloadLinkRef = useRef(null);

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

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const legaliserPdf = async () => {
    const formData = new FormData();
    formData.append("pdfFile", pdfFile);
    formData.append("imageFile", imageFile);

    try {
      const response = await axios.post(
        "http://localhost:8080/pdfController",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        },
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the Blob
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Set the public URL
      setPublicUrl(pdfUrl);

      // Trigger a click on the download link
      downloadLinkRef.current.click();
    } catch (error) {
      console.error("Error:", error);
      setResult("Error uploading files");
    }
  };

  return (
    <div className="flex flex-col">
      <button onClick={displayPdf}>Display Pdf</button>
      <button onClick={legaliserPdf}>Legaliser Pdf</button>
      <h1>Upload PDF and Image Files</h1>
      <input type="file" accept=".pdf" onChange={handlePdfChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <a ref={downloadLinkRef} href={publicUrl} download>
        Click to download
      </a>
      <button onClick={handleSubmit}>Upload</button>
      {result && <p>Result: {result}</p>}

      <div>
        <iframe src={publicUrl.publicUrl} width="100%" height="500px" />
      </div>
    </div>
  );
}
