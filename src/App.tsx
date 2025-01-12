import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [brand, setBrand] = useState("");
  const [subBrand, setSubBrand] = useState("");
  const [logoSize, setLogoSize] = useState(100);
  const [logoColor, setLogoColor] = useState("#000000");
  const [logoShape, setLogoShape] = useState("circle");
  const [logoText, setLogoText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textSize, setTextSize] = useState(16);
  const [fontStyle, setFontStyle] = useState("Arial");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderSize, setBorderSize] = useState(1);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [shadowSize, setShadowSize] = useState(0);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [transparency, setTransparency] = useState(1);
  const [effect, setEffect] = useState("none");
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imageFilter, setImageFilter] = useState("none");
  const [animation, setAnimation] = useState("none");
  const [logoMargin, setLogoMargin] = useState(0);
  const [logoPadding, setLogoPadding] = useState(0);

  function handleSubmit() {
    const data = {
      brand,
      subBrand,
      logoSize,
      logoColor,
      logoShape,
      logoText,
      textColor,
      textSize,
      fontStyle,
      backgroundColor,
      borderColor,
      borderSize,
      shadowColor,
      shadowSize,
      logoPosition,
      rotation,
      transparency,
      effect,
      uploadedImage: uploadedImage?.name,
      imageFilter,
      animation,
      logoMargin,
      logoPadding,
    };
    console.log("Logo Data: ", data);
  }

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Brand"
        />
        <input
          type="text"
          value={subBrand}
          onChange={(e) => setSubBrand(e.target.value)}
          placeholder="Sub Brand"
        />
        <input
          type="number"
          value={logoSize}
          onChange={(e) => setLogoSize(Number(e.target.value))}
          placeholder="Logo Size"
        />
        <input
          type="color"
          value={logoColor}
          onChange={(e) => setLogoColor(e.target.value)}
        />
        <select
          value={logoShape}
          onChange={(e) => setLogoShape(e.target.value)}
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>
        <input
          type="text"
          value={logoText}
          onChange={(e) => setLogoText(e.target.value)}
          placeholder="Logo Text"
        />
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
        <input
          type="number"
          value={textSize}
          onChange={(e) => setTextSize(Number(e.target.value))}
          placeholder="Text Size"
        />
        <select
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
        <input
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
        <input
          type="number"
          value={borderSize}
          onChange={(e) => setBorderSize(Number(e.target.value))}
          placeholder="Border Size"
        />
        <input
          type="color"
          value={shadowColor}
          onChange={(e) => setShadowColor(e.target.value)}
        />
        <input
          type="number"
          value={shadowSize}
          onChange={(e) => setShadowSize(Number(e.target.value))}
          placeholder="Shadow Size"
        />
        <input
          type="number"
          value={logoPosition.x}
          onChange={(e) =>
            setLogoPosition({ ...logoPosition, x: Number(e.target.value) })
          }
          placeholder="X Position"
        />
        <input
          type="number"
          value={logoPosition.y}
          onChange={(e) =>
            setLogoPosition({ ...logoPosition, y: Number(e.target.value) })
          }
          placeholder="Y Position"
        />
        <input
          type="number"
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          placeholder="Rotation"
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={transparency}
          onChange={(e) => setTransparency(Number(e.target.value))}
        />
        <select value={effect} onChange={(e) => setEffect(e.target.value)}>
          <option value="none">None</option>
          <option value="gradient">Gradient</option>
          <option value="pattern">Pattern</option>
        </select>
        <input
          type="file"
          onChange={(e) => setUploadedImage(e.target.files?.[0] || null)}
          placeholder="Upload Image"
        />
        <select
          value={imageFilter}
          onChange={(e) => setImageFilter(e.target.value)}
        >
          <option value="none">None</option>
          <option value="grayscale">Grayscale</option>
          <option value="sepia">Sepia</option>
        </select>
        <select
          value={animation}
          onChange={(e) => setAnimation(e.target.value)}
        >
          <option value="none">None</option>
          <option value="rotate">Rotate</option>
          <option value="pulse">Pulse</option>
        </select>
        <input
          type="number"
          value={logoMargin}
          onChange={(e) => setLogoMargin(Number(e.target.value))}
          placeholder="Logo Margin"
        />
        <input
          type="number"
          value={logoPadding}
          onChange={(e) => setLogoPadding(Number(e.target.value))}
          placeholder="Logo Padding"
        />
        <button type="submit">Create Logo</button>
      </form>
    </div>
  );
}

export default App;
