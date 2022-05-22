import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between px-10 py-5 bg-sky-600 text-white">
                <div>
                    <Link to='/' className="font-bold text-2xl hover:text-cyan-300">Expensify App</Link>
                </div>

                <div className="pt-1">
                    <Link to="/create" className="mx-3 hover:text-slate-400">Create</Link>
                    <Link to="/edit" className="mx-3 hover:text-slate-400">Edit</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;