import "./style.scss";

import Logo from "../../assets/logo.svg";

import TopInfo from "./TopInfo";
import SearchBar from "./SearchBar";
import Menu from "./MenuIcons";
import Categories from "./Categories";

function Header() {
  return (
    <header className="header">
      <TopInfo />

      <div className="header-content">
        <img
          src={Logo}
          alt="Logo da Econverse"
          className="header-logo"
        />

        <SearchBar />

        <Menu />
      </div>

      <Categories />
    </header>
  );
}

export default Header;