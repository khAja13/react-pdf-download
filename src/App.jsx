import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./App.css"

const App = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [month, setMonth] = useState("");
  const [amount, setAmount] = useState("");

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Getting the current date and formatting it
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    // Centering the company name in the PDF
    const companyName = "XYZ Corporation";
    const pageWidth = doc.internal.pageSize.getWidth();
    const companyNameWidth = doc.getTextWidth(companyName);
    const xPos = (pageWidth - companyNameWidth) / 2;

    // Styling the PDF content
    doc.setFont("helvetica", "normal");
    doc.setFontSize(20);
    doc.text(companyName, xPos, 30);

    // Adding data to the PDF
    doc.setFontSize(16);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Father's Name: ${fatherName}`, 20, 60);
    doc.text(`Month: ${month}`, 20, 70);

    // Using the rupee symbol (₹) for the amount
    doc.text(`Amount: Rs.${amount}`, 20, 80);

    // Adding the current date
    doc.text(`Date: ${formattedDate}`, 20, 90);

    // Creating the file name (name_month.pdf)
    const fileName = `${name}_${month}.pdf`;

    // Saving the PDF
    doc.save(fileName);

    setName("")
    setFatherName("")
    setMonth("")
    setAmount("")
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Generate PDF</h2>
      <div style={styles.formGroup}>
        <label style={styles.label}>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Father's Name: </label>
        <input
          type="text"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Month: </label>
        <input
          type="text"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.inputField}
        />
      </div>
      <button style={styles.generateBtn} onClick={handleDownloadPDF}>
        Generate and Download PDF
      </button>
    </div>
  );
};

// Inline styles with responsiveness
const styles = {
  container: {
    width: "90%",
    maxWidth: "500px",  // Maximum width of the form
    margin: "50px auto",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: "14px",
    marginBottom: "5px",
    display: "block",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  generateBtn: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};


export default App;
