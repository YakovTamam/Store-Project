import React from "react";

const categories = [
  "חנות",
  "ניקוי והברקה",
  "צביעה ותחזוקה",
  "פתרון בעיות",
  "מבצעים מיוחדים",
  "מותגים",
];

const quickNavigation = [
  "אודות",
  "בלוג",
  "צור קשר",
  "תקנון האתר",
  "הצהרת נגישות",
  "החשבון שלי",
];

export default function ButtomNavigation() {
  return (
    <div style={containerStyle}>
      <div style={columnStyle}>
        <h3 style={headingStyle}>קטגוריות</h3>
        <div style={divider} />
        {categories.map((category, index) => (
          <button key={index} style={buttonStyle}>
            {category}
          </button>
        ))}
      </div>
      <div style={columnStyle}>
        <h3 style={headingStyle}>ניווט מהיר</h3>
        <div style={divider} />
        {quickNavigation.map((item, index) => (
          <button key={index} style={buttonStyle}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  backgroundColor: "rgb(13 110 253 / 65%)",
  justifyContent: "space-evenly",
  height: "250px",
};

const columnStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  justifyContent: "space-evenly",
  marginTop: "10px",
};

const headingStyle = {
  margin: 0,
  padding: "0",
};

const buttonStyle = {
  color: "white",
  width: "auto",
  fontSize: "13px",
  fontWeight: "bold",
  alignSelf: "flex-start",
};

const divider = {
  borderTop: "3px solid black",
  width: "50px",
};
