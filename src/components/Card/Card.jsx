import { useState } from "react";

export const Card = ({ cardFigure }) => {
  const cardFace = "card";

  let [faceUp, setFaceUp] = useState(true);

  const turnFaceDown = () => {
    if (faceUp) setFaceUp(false);
  };

  return (
    <button onClick={() => turnFaceDown()}>
      {faceUp ? cardFace : cardFigure}
    </button>
  );
};
