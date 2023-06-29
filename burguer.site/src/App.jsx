
import './App.css'


export const App = () => {
  return (
    <body>
      <div id="top">
        <img id="logo " src="/AC • Delivery.svg" />
        <ul>
          <li> <a href="http://">Início</a> </li>
          <li> <a href="http://">Burguers</a> </li>
          <li> <a href="http://">Serviços</a> </li>
          <li> <a href="http://">Contato</a> </li>
        </ul>
        <button id="login">Fazer Login</button>
      </div>

      <div id="group">
        <div id="text">
          <h3>😋 Perde tempo não!</h3>

          <h1>O Hamburguer
            <br></br>
            mais delicioso
            <br></br>
            da Sua Cidade</h1>

          <p> É um fato estabelecido há muito tempo que um <br></br>
            leitor se distrairá com o conteúdo legível de uma <br></br>
            página ao olhar para seu layout.</p>
          <button id="pedido">Fazer Pedido</button>
        </div>

        <div id="burguer">
          <img id="blogin" src="/burger-login 1.png" />
          <img id="circle" src="/circle.png" />
          <img id="sombra" src="/shadow.png" />

          <div id="colum">
            <div id="rectangle"><img src="/user.png" /></div>
            <div id="rectangle"><img src="/pacote.png" /></div>
            <div id="rectangle"><img src="/local.png" /></div>
          </div>

        </div>

        <div id="columtext">
          <h3>Logou
            <img src="/Line 1.png" />
            <img src="/Line 2.png" />
          </h3>
          <h3>pediu
            <img src="/Line 1.png" />
            <img src="/Line 2.png" />
          </h3>
          <h3>Chegou
            <img src="/Line 1.png" />
            <img src="/Line 2.png" />
          </h3>
        </div>

      </div>

      <div id="Bar">
        <nav>
          <di id="navL">
            <h2>Pesquise o seu Hamburguer favorito!</h2>
            <input type="text" />
          </di>
          <div id="navR">
            <input type="text" />
          </div>
        </nav>
      </div>

      <div id="hall">
        <di id="halltop">

          <div id="box"> <img src="/Card-burger-1.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

          <div id="box"> <img src="/Card-burger-2 2.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

          <div id="box"> <img src="/Card-burger-3.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

        </di>

        <div id="halldown">

          <div id="box"> <img src="/Card-burger-4.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

          <div id="box"> <img src="/public/Card-burger-5.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

          <div id="box"> <img src="/Card-burger-3.png" />
            <button id="promo">Promoção</button>
            <h3>Tradicional</h3>
            <h1>Texas Burguer</h1>
            <h2>R$ 25,50</h2>
          </div>

        </div>

        <di id="white">
          <div id="rodape"></div>
        </di>

      </div>

    </body>


  );
}

export default App
