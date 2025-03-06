import lady from "./lady.jpg";
import logo from "./logo.jpg";

function Header(props) {
  const { isLogin } = props;

  //  if(isLogin){
  //      return <img src={lady} alt="" />
  //  } else{
  //     return <button>Login</button>
  //  }

  //   return (
  //     <header>
  //       {isLogin ? <img src={lady} alt="" /> : <button>Login</button>}
  //     </header>
  //   );

  //return <header>{isLogin && <img src={lady} alt="" /> }</header>
  return (
    <header>
      <img src={logo} alt="logo" />
      {isLogin ?  <img src={lady} alt="lady" /> : 
        <div>
          <button>Log In</button>
          <button>Registration</button>
        </div>
      }
    </header>
  );
}

export default Header;
