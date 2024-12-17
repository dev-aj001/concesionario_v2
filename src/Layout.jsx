import React from "react";
import MyNavbar from "./components/MyNavBar";
import MyDetailBar from "./components/MyDetailBar";
export default function Layout({ children }) {

    return (
        <>
            {/* <MyDetailBar /> */}
            <MyNavbar/>

            {/* Contenido principal */}
            <div
                className="flex flex-col justify-center mx-auto"
            >
                {children}
            </div>

        </>
    );
}
