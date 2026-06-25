import Contacto from "../contacto/Contacto";
import SobreMi from "../sobre-mi/SobreMi";
import Inicio from "../inicio/Inicio";
import { START } from "../inicio/START";
import Valores from "../sobre-mi/Valores";
import { createBrowserRouter } from "react-router";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <START />,
        children: [
            {
                index: true,
                element: <Inicio />,
            },
            {
                path: "inicio",
                element: <Inicio />,
            },
            {
                path: "sobre-mi",
                element: <SobreMi />,
            },
            {
                path: "contacto",
                element: <Contacto />,
            },
            {
                path: "valores",
                element: <Valores />,
            }
        ]
    }
])