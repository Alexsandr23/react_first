import logo from './logo.svg';
import cardImg from './cardImg.png';
import './App.scss';

const Logo = () => 
<img src={logo} className="header-logo" alt="logo" />
const CardImg = () => 
<img src={cardImg} className="card-img" alt="сardImg" />

const Header = () => 
<header className="header">
  <Logo/>
  <nav className="heder-nav">
      <ul className="no-margin heder-boxItem">
        <Link name="1" />
        <Link name="2" />
        <Link name="3" />
        <Link name="4" />
        <Link name="5" />
      </ul>
  </nav>
</header>

const Link = ({name, url="#"}) => 
  <li style={{cssText:"text-decoration: none;"}}><a className="header-link" href={url}>Item {name}</a></li>

const Main = () => 
<main className="main">
  <Aside />
  <SectionContent />
  <Aside />
</main>

const SectionContent = () =>
<section className="section-content">
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique vero earum ab sint dolorum qui beatae quo natus, voluptatem voluptatibus illo ad ea nihil reiciendis quos accusamus ut itaque impedit.</p>
  <p className="content-title">OUR WORK</p>
      <div className="car-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
</section>

const Aside = () =>
<aside className="aside">
  <p>Aside </p>
</aside>

const Card = () =>
        <div className="card">
            <CardImg />
            <p className="card-title">Lorem ipsum dolor sit amet</p>
            <p className="card-sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className="card-btn">Go</button>
        </div>            

const Footer = () =>
<footer className="footer">
  <p>Footer</p>
</footer>



function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
