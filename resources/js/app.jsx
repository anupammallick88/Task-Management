import "./bootstrap";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import "../style/css/custom.css";

// import Admin from './Pages/Admin/Index.jsx';

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

{/* <Route path="./Admin"  element={<Admin />} />; */}

InertiaProgress.init({ color: "#4B5563" });
