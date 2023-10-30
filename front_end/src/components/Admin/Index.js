import React , {useContext} from "react";
import NavAdmin from "../Admin/NavAdmin";
import { Outlet } from "react-router-dom";

export default function Index(props){
    const {token, removeToken, setToken  } = props;
    return(
        <main className="bg-gradient-to-r lg:space-y-24 space-y-20 from-purple-400 to-yellow-400">
            <NavAdmin token={token} removeToken={removeToken} setToken={setToken} />
            <Outlet/>
        </main>
    );
};