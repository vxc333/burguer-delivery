import "./App.css";
import "./assets/fonts/fonts.css";
import Box from "./components/box-burguer/box";
import Icons from "./components/icons/icons";
import burger1 from "./assets/image/Card-burger-1.png";
import burger2 from "./assets/image/Card-burger-2.png";
import burger3 from "./assets/image/Card-burger-3.png";
import burger4 from "./assets/image/Card-burger-4.png";
import burger5 from "./assets/image/Card-burger-5.png";
import burger6 from "./assets/image/Card-burger-6.png";
import user from "./assets/image/user.png";
import pacote from "./assets/image/pacote.png";
import local from "./assets/image/local.png";
export const App = () => {
  return (
    <body>
      <div className="nav">
        <img id="logo " src="src\assets\image\AC • Delivery.svg" />
        <ul>
          <li>
            <a href="http://">Início</a>{" "}
          </li>
          <li>
            <a href="http://">Burguers</a>{" "}
          </li>
          <li>
            <a href="http://">Serviços</a>{" "}
          </li>
          <li>
            <a href="http://">Contato</a>{" "}
          </li>
        </ul>
        <button id="login">Fazer Login</button>
      </div>

      <div id="group">
        <div id="text">
          <h3>😋 Perde tempo não!</h3>

          <h1>
            O Hamburguer
            <br></br>
            mais delicioso
            <br></br>
            da Sua Cidade
          </h1>

          <p>
            É um fato estabelecido há muito tempo que um <br></br>
            leitor se distrairá com o conteúdo legível de uma <br></br>
            página ao olhar para seu layout.
          </p>
          <button id="pedido">Fazer Pedido</button>
        </div>

        <div id="burguer">
          <img id="blogin" src="src/assets/image//burger-login 1.png" />
          <img id="circle" src="src/assets/image//circle.png" />
          <img id="sombra" src="src/assets/image//shadow.png" />
          <div id="colum">
            <Icons title="Logou" imagemSrc={user}></Icons>
            <Icons title="Pediu" imagemSrc={pacote}></Icons>
            <Icons title="Chegou" imagemSrc={local}></Icons>
          </div>
        </div>
      </div>

      <div id="Bar">
        <nav>
          <div id="navL">
            <h2>Pesquise o seu Hamburguer favorito!</h2>
            <input type="text" value="Digite o nome do Burguer" />
          </div>
          <div id="navR">
            <select type="text">
              <option value="">Todos os Hamburgueres</option>
            </select>
          </div>
        </nav>
      </div>

      <div id="limite">
        <div id="hall">
          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger1}
            ativarBox={true}
          />

          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger2}
            ativarBox={false}
          />

          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger3}
            ativarBox={false}
          />

          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger4}
            ativarBox={false}
          />

          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger5}
            ativarBox={false}
          />

          <Box
            tituloH3="Tradicional"
            tituloH1="Texas Burguer"
            tituloH2="R$ 25,50"
            imagemSrc={burger6}
            ativarBox={true}
          />
        </div>
      </div>
      <di id="white">
        <div id="rodape"></div>
      </di>
    </body>
  );
};

export default App;
