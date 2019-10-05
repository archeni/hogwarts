import utilities from '../../helpers/utilities';
import './navbar.scss';

const loadNavbar = () => {
  const stringDom = `
    <nav>
      <a href="#" cless="brand">Hogwarts</a>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  `
  utilities.printToDom('nav-container', stringDom);
}

export default { loadNavbar };