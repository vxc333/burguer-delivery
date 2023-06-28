import "./box.css";

export default function box({
  tituloH3,
  tituloH1,
  tituloH2,
  imagemSrc,
  ativarBox,
}) {
  return (
    <div id="box">
      {imagemSrc && <img src={imagemSrc} alt="Minha Imagem" />}
      {ativarBox && <div id="promo">Promoção</div>}
      <h3>{tituloH3}</h3>
      <h1>{tituloH1}</h1>
      <h2>{tituloH2}</h2>
    </div>
  );
}
