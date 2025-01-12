import { useState } from "react";
import { Header } from "./components/Header";

function App() {
  const [brand, setBrand] = useState("");
  const [subBrand, setSubBrand] = useState("");
  const [logoSize, setLogoSize] = useState(100);
  const [logoColor, setLogoColor] = useState("#000000");
  const [logoShape, setLogoShape] = useState("");
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
        <label htmlFor="brand">Brand Name:</label>
        <input
          id="brand"
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <label htmlFor="subBrand">Sub-Brand:</label>
        <input
          id="subBrand"
          type="text"
          value={subBrand}
          onChange={(e) => setSubBrand(e.target.value)}
        />

        <label htmlFor="logoSize">Logo Size:</label>
        <input
          id="logoSize"
          type="number"
          value={logoSize}
          onChange={(e) => setLogoSize(Number(e.target.value))}
        />

        <label htmlFor="logoColor">Logo Color:</label>
        <input
          id="logoColor"
          type="color"
          value={logoColor}
          onChange={(e) => setLogoColor(e.target.value)}
        />

        <label htmlFor="logoShape">Logo Shape:</label>
        <select
          id="logoShape"
          value={logoShape}
          onChange={(e) => setLogoShape(e.target.value)}
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>

        <label htmlFor="logoText">Logo Text:</label>
        <input
          id="logoText"
          type="text"
          value={logoText}
          onChange={(e) => setLogoText(e.target.value)}
        />

        <label htmlFor="textColor">Text Color:</label>
        <input
          id="textColor"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />

        <label htmlFor="textSize">Text Size:</label>
        <input
          id="textSize"
          type="number"
          value={textSize}
          onChange={(e) => setTextSize(Number(e.target.value))}
        />

        <label htmlFor="fontStyle">Font Style:</label>
        <select
          id="fontStyle"
          value={fontStyle}
          onChange={(e) => setFontStyle(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>

        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />

        <label htmlFor="borderColor">Border Color:</label>
        <input
          id="borderColor"
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />

        <label htmlFor="borderSize">Border Size:</label>
        <input
          id="borderSize"
          type="number"
          value={borderSize}
          onChange={(e) => setBorderSize(Number(e.target.value))}
        />

        <label htmlFor="shadowColor">Shadow Color:</label>
        <input
          id="shadowColor"
          type="color"
          value={shadowColor}
          onChange={(e) => setShadowColor(e.target.value)}
        />

        <label htmlFor="shadowSize">Shadow Size:</label>
        <input
          id="shadowSize"
          type="number"
          value={shadowSize}
          onChange={(e) => setShadowSize(Number(e.target.value))}
        />

        <label htmlFor="logoPositionX">Logo Position X:</label>
        <input
          id="logoPositionX"
          type="number"
          value={logoPosition.x}
          onChange={(e) =>
            setLogoPosition({ ...logoPosition, x: Number(e.target.value) })
          }
        />

        <label htmlFor="logoPositionY">Logo Position Y:</label>
        <input
          id="logoPositionY"
          type="number"
          value={logoPosition.y}
          onChange={(e) =>
            setLogoPosition({ ...logoPosition, y: Number(e.target.value) })
          }
        />

        <label htmlFor="rotation">Rotation:</label>
        <input
          id="rotation"
          type="number"
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
        />

        <label htmlFor="transparency">Transparency:</label>
        <input
          id="transparency"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={transparency}
          onChange={(e) => setTransparency(Number(e.target.value))}
        />

        <label htmlFor="effect">Effect:</label>
        <select
          id="effect"
          value={effect}
          onChange={(e) => setEffect(e.target.value)}
        >
          <option value="none">None</option>
          <option value="gradient">Gradient</option>
          <option value="pattern">Pattern</option>
        </select>

        <label htmlFor="uploadedImage">Upload Image:</label>
        <input
          id="uploadedImage"
          type="file"
          onChange={(e) => setUploadedImage(e.target.files?.[0] || null)}
        />

        <label htmlFor="imageFilter">Image Filter:</label>
        <select
          id="imageFilter"
          value={imageFilter}
          onChange={(e) => setImageFilter(e.target.value)}
        >
          <option value="none">None</option>
          <option value="grayscale">Grayscale</option>
          <option value="sepia">Sepia</option>
        </select>

        <label htmlFor="animation">Animation:</label>
        <select
          id="animation"
          value={animation}
          onChange={(e) => setAnimation(e.target.value)}
        >
          <option value="none">None</option>
          <option value="rotate">Rotate</option>
          <option value="pulse">Pulse</option>
        </select>

        <label htmlFor="logoMargin">Logo Margin:</label>
        <input
          id="logoMargin"
          type="number"
          value={logoMargin}
          onChange={(e) => setLogoMargin(Number(e.target.value))}
        />

        <label htmlFor="logoPadding">Logo Padding:</label>
        <input
          id="logoPadding"
          type="number"
          value={logoPadding}
          onChange={(e) => setLogoPadding(Number(e.target.value))}
        />

        <button type="submit">Create Logo</button>
      </form>
    </div>
  );
}

export default App;
