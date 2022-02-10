import "import-jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";
import jquery from "jquery";
import draw2d from "draw2d";

import s from './App.module.scss';
import React, {useState} from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";

import {DiagramEditorPage, ProfilePage} from "./pages"
import Connection from "./components/DiagramEditor/Connection";

window.$ = window.jQuery = jquery;
window.draw2d = draw2d;
window.Connection = Connection;

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<DiagramEditorPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    </Router>
);

export default App;
