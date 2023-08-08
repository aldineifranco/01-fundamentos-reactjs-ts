import style from "./Header.module.css";
import Logo from '../../assets/images/ignite-simbol.svg'

export function Header() {
  return (
    <>
      <header className={style.header}>
        <img src={Logo} alt="logotipo do ignite" />
      </header>
    </>
  );
}
