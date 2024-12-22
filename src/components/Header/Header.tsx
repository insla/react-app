import logo from '@images/logo.svg'

import { HeaderNav } from './HeaderNav'

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__wrapper">
        <a>
          <img src={logo} className="header__logo" alt="logo" />
        </a>
        <HeaderNav />
        <div className="header__burger">
          <input
            type="checkbox"
            id="nav-toggle"
            className="header__nav-toggle"
          />
          <label htmlFor="nav-toggle" className="header__icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}
