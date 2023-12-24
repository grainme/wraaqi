import React, { useState } from "react";
import axios from "axios";

function LegalApp() {
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [result, setResult] = useState("");

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async () => {
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
    <div>
      <h1>Upload PDF and Image Files</h1>
      <input type="file" accept=".pdf" onChange={handlePdfChange} />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default LegalApp;
