import React, { useState, useEffect } from "react";
import Values from "values.js";

function GenerateColors() {
  const [hexColorCode, setHexCode] = useState("FA8072");
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    const defaultList = new Values(`#${hexColorCode}`);
    setColorList(defaultList.all(5));
  }, 1000);

  function handleColor(e) {
    e.preventDefault();
    try {
      setColorList(new Values(`#${hexColorCode}`).all(5));
    } catch (error) {
      console.log(error);
    }
  }

  function handleValue(e) {
    e.preventDefault();
    setHexCode(e.target.value);
  }

  return (
    <section>
      <form>
        <input
          type="text"
          name="myColor"
          id="myColor"
          placeholder="FA8072"
          onChange={handleValue}
          maxlength="6"
        />
        <button onClick={handleColor}>GENERATE COLORS</button>
      </form>
      <br />
      <div className="flex">
        {colorList.map((color, index) => (
          <article
            key={index}
            style={{
              backgroundColor: `rgb(${color.rgb.join(",")})`,
            }}
            onClick={() => navigator.clipboard.writeText(color.hexString())}
          >
            <p>
              {color.hexString()}
              <br />
              {color.weight + "%"}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GenerateColors;
