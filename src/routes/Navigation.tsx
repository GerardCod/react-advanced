import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Route as RouteObj, routes } from "../routes/routes";

import logo from "../assets/react.svg";

export const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="react_logo" />
                        <ul>
                            {
                                routes.map(({ name, to }: RouteObj) => (
                                    <li>
                                        <NavLink to={to} className={({ isActive }) => isActive ? "nav-active" : ""}>{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, Component }: RouteObj) => <Route path={path} element={<Component />} />)
                        }
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
