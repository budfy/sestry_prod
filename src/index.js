import './index.scss';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Favaltern from './assets/icons/favicon.png'
import  Favicon  from './assets/icons/favicon.svg'
import { Helmet } from 'react-helmet';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Helmet>
      <meta name="description" content="Біжутерія та аксесуари від сестер Тетяни та Світлани" />
      <meta name="keywords" content="біжутерія, аксесуари, прикраси, краса, стиль, мода, перлини, срібло, кільце, каблучка, сережки, намисто, підвіска, браслет, модні прикраси, дизайнерська біжутерія, елегантні прикраси, подарункова біжутерія, жіноча біжутерія, чоловіча біжутерія, дитяча біжутерія, срібна біжутерія, золота біжутерія, біжутерія в стилі вінтаж, ексклюзивна біжутерія, біжутерія на замовлення, ручна робота біжутерія, недорога біжутерія, морська біжутерія, біжутерія з каменями, біжутерія зі шкіри, біжутерія для весілля, біжутерія для вечірок, біжутерія для повсякденного носіння, камені для біжутерії, кольє, ланцюжки" />
      <meta
          content="width=device-width,initial-scale=1"
          name="viewport"
        />
      <link rel="shortcut icon" href={ Favicon } type="image/x-icon" />
      <link rel="shortcut icon" href={ Favaltern } type="image/png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet" />
            <title>Sestry accessories</title>
    </Helmet>
    <App />
  </BrowserRouter>
);