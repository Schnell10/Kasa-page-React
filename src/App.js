import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import FicheLogement from './pages/fiche-logement/FicheLogement'
import APropos from './pages/a-propos/APropos'
import Page404 from './pages/page-404/Page404'
import Layout from './components/layout/Layout'

const App = () => {
   return (
      <div>
         <Router>
            <Layout>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                     path="/OCProjet6_Crez-une-application-web-de-location-immobiliere-avec-React"
                     element={<Home />}
                  />
                  <Route
                     path="/fiche-logement/:id"
                     element={<FicheLogement />}
                  />

                  <Route path="/a-propos" element={<APropos />} />
                  <Route path="*" element={<Page404 />} />
               </Routes>
            </Layout>
         </Router>
      </div>
   )
}

export default App
