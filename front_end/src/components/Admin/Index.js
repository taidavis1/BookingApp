import React , {useContext} from "react";
import { Outlet } from "react-router-dom";

export default function Index(){
    return(
        <main className="bg-gradient-to-r from-purple-400 to-yellow-400">
            <Outlet/>
        </main>
    );
};