import {createRoot} from"react-dom/client"
import App from"./App"
import React from "react";
const divRoot = document.getElementById("root")
const root = createRoot(divRoot);
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)
