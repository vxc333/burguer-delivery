import "./icons.css";

export default function icons({ title, imagemSrc }) {
  return (
    <div id="geral">
      <div id="rectangle">
      {imagemSrc && <img src={imagemSrc} alt="Minha Imagem" />}
      </div>
      <div id="text-icon">
      <div id="div">
      <h3>{title}</h3>
      <div id="img-icon">
      <img src="src/assets/image//Line 1.png" />
      <img src="src/assets/image//Line 2.png" />
      </div>
      </div>
      </div>
    </div>
  );
}
