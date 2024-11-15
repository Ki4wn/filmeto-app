import logo from '../assets/logo.png';

const BaseHeader = () => {
  return (
    <>
      <header>
        <div className='container max-w-container'>
          <div className='flex items-center h-[75px] justify-between'>
            <div className='flex items-center'>
              <button
                id='menubar-toggle'
                className='btn head-btn flex lg:hidden pl-0'
              >
                <i className='fa-solid fa-bars'></i>
              </button>
              <a href='/' className='logo'>
                <img src={logo} alt='' />
              </a>
            </div>
            <div id='user-content'>
              <button
                data-toggle='modal'
                data-target='#sign'
                className='btn head-btn'
              >
                <i className='fa-solid fa-circle-user'></i> <span>Sign In</span>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <div id='menubar'>
              <ul>
                <li>
                  <a href='/'>
                    <span>Browse</span>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span>Movies</span>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span>Tv Shows</span>
                  </a>
                </li>
                <li>
                  <a href='/'>
                    <span>Top IMDb</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BaseHeader;
