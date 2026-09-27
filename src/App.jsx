import RegisterForm from './components/RegisterForm/RegisterForm';
import './App.css';

export default function App() {
  return (
    <div className="site">
      <header className="site-header">
        <a className="brand" href="./" aria-label="Forma, inicio"><span aria-hidden="true">f.</span> forma</a>
        <span className="course">ROCK THE CODE <span>/</span> REACT HOOK FORM</span>
        <span className="edition">PRÁCTICA 07</span>
      </header>
      <main>
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow"><span /> UN PEQUEÑO PASO, UN NUEVO COMIENZO</p>
          <h1 id="intro-title">Todo empieza<br />con una<br /><em>buena forma.</em></h1>
          <p className="intro-copy">Las grandes ideas comienzan con algo sencillo.<br className="desktop-break" /> Hoy, con tu nombre.</p>
          <div className="artwork" aria-hidden="true"><div className="arch arch-back" /><div className="arch arch-front" /><span className="art-dot" /><span className="art-line" /><span className="art-caption">MENOS PASOS. MÁS POSIBILIDADES.</span></div>
          <p className="intro-note"><span aria-hidden="true">↗</span> Un ejercicio de conexión entre diseño y código.</p>
        </section>
        <section className="form-panel" aria-labelledby="form-title"><RegisterForm /></section>
      </main>
      <footer><span>Diseñado y desarrollado por <a href="https://github.com/AraceliFradejas">Araceli Fradejas Muñoz</a></span><span>THE POWER TECH SCHOOL <span aria-hidden="true">·</span> 2026</span></footer>
    </div>
  );
}
