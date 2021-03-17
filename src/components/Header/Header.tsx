import "../../styles.css";
import "./style.css";
import Logo from "./logo.png";

interface IProps {
  isLoggedIn: boolean;
}

export default function Header(props: IProps) {
  return (
    <header className="Header">
      <img src={Logo} alt="logo" onClick={() => (window.location.href = "/")} />

      <div className="action-container">
        {props.isLoggedIn ? (
          <button>Create</button>
        ) : (
          [<button>Log in</button>, <button>Sign in</button>]
        )}
      </div>
    </header>
  );
}
