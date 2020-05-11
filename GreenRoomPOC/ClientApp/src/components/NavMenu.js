import React, { useState } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import './NavMenu.css';

const NavMenu = (props) => {
  const displayName = NavMenu.name;
  const { t, i18n } = useTranslation();
  const [collapsed, setCollapse] = useState(true);
  const [lang, setLang] = useState('en');

  const handleChange = (event) => {
    setLang(event.target.value)
    i18n.changeLanguage(event.target.value);
    // props.i18n.changeLanguage(event.target.value);
    // event.preventDefault();
  };

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">GreenRoomPOC</NavbarBrand>
          <NavbarToggler onClick={() => setCollapse(!collapsed)} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/">{t('translation:menu:home')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/translate">{t('translation:menu:translate')}</NavLink>
              </NavItem>
              <NavItem>
                <select name="lang" id="lang" className="form-control" value={lang} onChange={handleChange}>
                  <option value="en"> {t('translation:en')}</option>
                  <option value="es">{t('translation:es')}</option>
                </select>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
