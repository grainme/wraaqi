import { supabase } from "@/client/supabaseClient";
import axios from "axios";
import { useState } from "react";

export default function LegalisationTraitement() {
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState("");
  const [publicUrl, setPublicUrl] = useState({});
  const [pdf, setPdf] = useState();

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
    const fonctionnaire=pdf.fonctionnaire; 
    const { data, error } = supabase.storage
      .from("wraaqi")
      .getPublicUrl(fonctionnaire.user.cin + "/documents" + "/" + pdf.fileContent);
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

      // Open the PDF in a new window
      window.open(pdfUrl);
    } catch (error) {
      console.error("Error:", error);
      setResult("Error uploading files");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
      <h1 className="text-[50px] font-semibold font-CG mb-4">
        Traitement de Legalisation
      </h1>

      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            onClick={displayPdf}
          >
            Display Pdf
          </button>
          <button
            className="bg-yellow-800 text-white px-4 py-2 rounded-md"
            onClick={legaliserPdf}
          >
            Legaliser Pdf
          </button>
        </div>

        <h2 className="text-[14px] font-GS font-medium">Upload PDF and Image Files</h2>

        <div className="flex space-x-4">
          <input
            type="file"
            accept=".pdf"
            onChange={handlePdfChange}
            className="border p-2"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border p-2"
          />
        </div>

        <a href={publicUrl.publicUrl} download className="text-blue-500">
          Click to download
        </a>

        {result && <p className="text-green-500">Result: {result}</p>}

        {publicUrl && (
          <div className="mt-4">
            <iframe
              src={pdf ? publicUrl.publicUrl : ""}
              width="100%"
              height="500px"
              className="border"
            />
          </div>
        )}
      </div>
    </div>
  );
}
