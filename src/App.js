import React, { useEffect, useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import NoFoundPage from './components/NoFoundPage';
import CreerEntreprise from './components/homePage/CreerEntreprise'

import ModifierEntreprise from './components/homePage/ModifierEntreprise'
import Formulaire from './components/homePage/Formulaire'
import Entreprises from './components/entreprises/Entreprises';
import EntrepriseLoadingComponent from './components/entreprises/EntrepriseLoading';

import CreerUser from './components/CreerUser'
import CompteComptable from './components/CompteComptable'
import UpdateEntreprise from './components/entreprises/UpdateEntreprise'

export default function App() {
  const EntrepriseLoading = EntrepriseLoadingComponent(Entreprises);
  const [appState, setAppState] = useState({
    loading: false,
    entreprises: null,
  });
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://127.0.0.1:8000/api/`;
    fetch(apiUrl)
      .then((data) => data.json())
      .then((ent) => {
        setAppState({ loading: false, entreprises: ent });
      });
  }, [setAppState]);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreerUser />} />
            <Route path="/compatble" element={<CompteComptable />} />
            <Route path="/creer-son-entreprise" element={<CreerEntreprise />} />

            <Route path="/modifier-son-entreprise" element={<ModifierEntreprise />} />
            <Route name="/update" path="/:testvalue" element={<UpdateEntreprise />} />
            <Route path="/formulaire" element={<Formulaire />} />
            <Route path="/account" element={<EntrepriseLoading entreprises={appState.entreprises} />} />
            <Route path="*" element={<NoFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  )
}