import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  Nav,
  AboutPage,
  HelpPage,
  OurTeamPage,
  PrivacyPolicyPage,
  TermsPage,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />} exact />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/our-team" element={<OurTeamPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsPage />} />
    </Routes>
  );
};

export default App;
