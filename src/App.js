import { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: "Ücret karşılığında yolcu taşımak için lisanslı bir araç",
    food: {
      sushi:
        "Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği",
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected }) => {
  const renderObject = (obj, indent = 0) => {
    return Object.entries(obj).map(([key, value]) => {
      if (typeof value === "object") {
        return (
          <div key={key} style={{ marginLeft: indent * 20 }}>
            <strong>{key}:</strong>
            <div>{renderObject(value, indent + 1)}</div>
          </div>
        );
      } else {
        return (
          <div key={key} style={{ marginLeft: indent * 20 }}>
            <strong>{key}:</strong> {value}
          </div>
        );
      }
    });
  };

  return <div>{renderObject(nestedObjected)}</div>;
};

export default App;
