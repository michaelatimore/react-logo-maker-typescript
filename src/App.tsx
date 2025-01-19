import { useState } from "react";
import { Header } from "./components/Header";
import { StringInput, NumberInput } from "./components/Input";

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
  const [rotation, setRotation] = useState(0);
  const [transparency, setTransparency] = useState(1);
  const [effect, setEffect] = useState("none");
  const [uploadedImageName, setUploadedImageName] = useState("");
  const [imageFilter, setImageFilter] = useState("none");
  const [animation, setAnimation] = useState("none");
  const [logoMargin, setLogoMargin] = useState(0);
  const [logoPadding, setLogoPadding] = useState(0);
  const [logoPosition, setLogoPosition] = useState({ x: 0, y: 0 });
  ``;

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
      uploadedImageName,
      imageFilter,
      animation,
      logoMargin,
      logoPadding,
    };
    console.log("Logo Data: ", data);
  }

  return (
    <div className="min-w96 flex min-h-screen flex-col gap-4 bg-slate-600 text-center">
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <StringInput label="Brand" value={brand} setValue={setBrand} />
        <StringInput
          label="Sub Brand"
          value={subBrand}
          setValue={setSubBrand}
        />
        <NumberInput
          label="Logo Size"
          value={logoSize}
          setValue={setLogoSize}
        />
        <StringInput
          label="Logo Color"
          value={logoColor}
          setValue={setLogoColor}
        />
        <StringInput
          label="Logo Shape"
          value={logoShape}
          setValue={setLogoShape}
        />
        <StringInput
          label="Logo Text"
          value={logoText}
          setValue={setLogoText}
        />
        <StringInput
          label="Text Color"
          value={textColor}
          setValue={setTextColor}
        />
        <NumberInput
          label="Text Size"
          value={textSize}
          setValue={setTextSize}
        />
        <StringInput
          label="Font Style"
          value={fontStyle}
          setValue={setFontStyle}
        />
        <StringInput
          label="Background Color"
          value={backgroundColor}
          setValue={setBackgroundColor}
        />
        <StringInput
          label="Background Color"
          value={backgroundColor}
          setValue={setBackgroundColor}
        />
        <StringInput
          label="Border Color"
          value={borderColor}
          setValue={setBorderColor}
        />
        <NumberInput
          label="Border Size"
          value={borderSize}
          setValue={setBorderSize}
        />
        <StringInput
          label="Shadow Color"
          value={shadowColor}
          setValue={setShadowColor}
        />
        <NumberInput
          label="Shadow Size"
          value={shadowSize}
          setValue={setShadowSize}
        />
        <NumberInput label="Rotation" value={rotation} setValue={setRotation} />
        <NumberInput
          label="Transparency"
          value={transparency}
          setValue={setTransparency}
        />
        <StringInput label="Effect" value={effect} setValue={setEffect} />

        <StringInput
          label="Upload Image"
          value={uploadedImageName}
          setValue={setUploadedImageName}
        />

        <StringInput
          label="Image Filter"
          value={imageFilter}
          setValue={setImageFilter}
        />
        <StringInput
          label="Animation"
          value={animation}
          setValue={setAnimation}
        />

        <NumberInput
          label="Logo Margin"
          value={logoMargin}
          setValue={setLogoMargin}
        />
        <NumberInput
          label="Logo Padding"
          value={logoPadding}
          setValue={setLogoPadding}
        />
        <NumberInput
          label="Position X"
          value={logoPosition.x}
          setValue={setLogoPosition.x}
        />
        <NumberInput
          label="Position Y"
          value={logoPosition.y}
          setValue={setLogoPosition.y}
        />

        <button type="submit">Create Logo</button>
      </form>
    </div>
  );
}

export default App;
