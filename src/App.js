import scss from './index.scss'

function App() {
  return (
    <div className="App">
      <header>
          <div className='headerLeft'>
              <img src='/image/scale_1200.webp' height={'20px'} />
              <div className='headerLabel'>
                  <h3>Guardians of the Galaxy</h3>
                  <p>Security agency</p>
              </div>
          </div>
          <ul className='headerRight'>
              <li>
                  <img src='/image/cart.png'/>
                  <span>5600 $</span>
              </li>
              <li>
                  <img src='/image/user.png' height={'20px'}/>
              </li>
          </ul>
      </header>
        <div className='content'>
            <h3>All the guards</h3>
            ....
        </div>
    </div>
  );
}

export default App;
