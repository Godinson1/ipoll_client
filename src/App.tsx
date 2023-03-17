import React from "react";
import { Routes, Route } from "react-router-dom";
import { ViewportProvider } from "./utilities";
import Landing from "./Components/Landing";
import Faqs from "./Components/Faqs";
import Contact from "./Components/Contact";
import ViewAllPoll, { ViewPoll } from "./Components/View";
import CreatePoll, { Success } from "./Components/Create";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ViewportProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/polls" element={<ViewAllPoll />} />
            <Route path="/poll/:id/view" element={<ViewPoll />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/create/success" element={<Success />} />
          </Routes>
        </ViewportProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
