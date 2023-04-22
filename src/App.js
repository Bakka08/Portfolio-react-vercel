import Footer from "./components/Footer";
import React from "react";
import './App.css';
import {Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Formations from './components/Formations';
import Projets from "./components/Projets";
import Experiences from "./components/Experiences";
import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Profilepic from "./components/Profilepic";
import homeIcon from './assets/home.png';
import bookIcon from './assets/book.png';
import listIcon from './assets/list.png';
import wrenchIcon from './assets/wrench.png';
import verifiedIcon from './assets/verified.png';
import Certification from "./components/Certification";

function App() {
  return (
    <div>
    <BrowserRouter>
      <div>
      <header className="header">
          <Profilepic />
          <h1>Samih Saad</h1>
          <h2>Etudiant Ingénieur en 4eme annee IIR</h2>
        </header>
      </div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#18122B" }}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link " >
              <img src={homeIcon} width="20" height="20" style={{ marginRight: '10px' }}></img> Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/formations" className="nav-link">
              <img src={bookIcon} width="20" height="20"  style={{ marginRight: '10px' }}></img> 
                Formations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/experiences" className="nav-link">
              <img src={listIcon} width="20" height="20" style={{ marginRight: '10px' }}></img> 
                Expériences
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/project" className="nav-link">
              <img src={wrenchIcon}width="20" height="20" style={{ marginRight: '10px' }}></img> 
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/certifications" className="nav-link">
              <img src={verifiedIcon}width="20" height="20" style={{ marginRight: '10px' }}></img> 
                Certifications
              </Link>
            </li>
          </ul>
        </nav>
        <div className="container mt-4" >
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/project" element={<Projets />} />
            <Route path="/certifications" element={<Certification />} />
          </Routes>
        </div>
    </BrowserRouter>
       <Footer/>
       </div>
  );
}
function Accueil() {
  return (
    <section className="section">
      <Card title="Samih saad" >
        <p className="m-0">
        Je suis un étudiant en cycle d'ingénieur spécialisé dans la filière développement et réseau informatique. Je suis passionné par l'informatique depuis mon plus jeune âge, et j'ai choisi de poursuivre mes études dans ce domaine pour en faire mon métier. Je suis fier de dire que j'ai acquis une solide expérience dans de nombreux langages de programmation.

      En plus de mes compétences en développement, j'ai également acquis des connaissances en administration système, notamment en administration Linux, ainsi qu'en gestion de réseau. Je suis convaincu que ces compétences me permettront de travailler sur des projets variés et complexes, nécessitant une expertise technique approfondie.

      Je suis un professionnel polyvalent et motivé, qui aime résoudre des problèmes et trouver des solutions innovantes. J'ai un bon sens de l'écoute et je suis très à l'écoute des besoins des clients. J'aime travailler en équipe et j'ai une attitude positive envers les défis techniques. Je suis sûr que ma passion pour l'informatique et mes compétences techniques feront de moi un contributeur précieux pour toute entreprise qui souhaite innover dans le domaine de la technologie.        </p>
      
      </Card>
    </section>
  );
}

export default App;
