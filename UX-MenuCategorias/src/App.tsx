import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="menu">
        <li><a href="#">Início</a></li>
        <li className="dropdown">
          <a href="#">Produtos</a>
          <ul className="submenu">
            <li className="dropdown">
              <a href="#">Tecnologia</a>
              <ul className="submenu lateral">
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Notebooks</a></li>
                <li><a href="#">PCs</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Casa</a>
              <ul className="submenu lateral">
                <li><a href="#">Geladeira</a></li>
                <li><a href="#">Fogão</a></li>
                <li><a href="#">Cama</a></li>
              </ul>
            </li>
              <li className="dropdown">
              <a href="#">Moda</a>
              <ul className="submenu lateral">
                <li><a href="#">Roupas</a></li>
                <li><a href="#">Calçados</a></li>
                <li><a href="#">Acessórios</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="#">Esporte</a>
              <ul className="submenu lateral">
                <li><a href="#">Bicicletas</a></li>
                <li><a href="#">Equipamentos</a></li>
                <li><a href="#">Roupas Esportivas</a></li>
              </ul>
            </li>
            <li className='dropdown'>
              <a href="#">Pet</a>
              <ul className="submenu lateral">
                <li><a href="#">Rações</a></li>
                <li><a href="#">Brinquedos</a></li>
                <li><a href="#">Acessórios</a></li>
              </ul>
            </li> 
          </ul>
        </li>
        <li><a href="#">Contato</a></li>
      </ul>
      <main>
        <h1>Bem-vindo ao nosso site!</h1>
        <p>Explore nossos <a href="#">produtos</a> ou conheça nossos <a href="#">serviços</a>.</p>
      </main>
    </div>
  );
}

export default App