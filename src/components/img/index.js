import React, { useEffect, useState } from "react";

const Image = () => {
  // generate random text
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState(`https://robohash.org/${text}.png`);
  const [loading, setLoading] = useState(false);

  //   robot generator
  const generateRobot = async () => {
    setLoading(true);
    await setText(Math.random().toString(36).substring(2, 15));
    await console.log(text);
  };

  useEffect(() => {
    setImgUrl(`https://robohash.org/${text}.png`);
    setLoading(false);
  }, [text]);

  return (
    <div className="text-center">
      {loading ? (
        ""
      ) : (
        <a href={imgUrl + "?size=400x400"}>
          <img src={imgUrl + "?size=400x400"} alt="text" />
        </a>
      )}
      <button className="btn" onClick={generateRobot}>
        Generate a Cute Robot
      </button>
    </div>
  );
};

export default Image;
