import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Navbar() {

    return (
        <nav className="NavBar flex justify-around py-4 mx-auto bg-accent w-96 rounded-b-2xl">
            <div className="navicons flex flex-row gap-12">
                <div className="CreatePost">
                    <p><AiOutlinePlusCircle size={28} /></p>
                </div>
                <div className="Activity">
                    <p><AiOutlineHeart size={28} /></p>
                </div>
                <div className="Location">
                    <p><MdOutlineLocationOn size={28} /></p>
                </div>
                <div className="Shop">
                    <p><MdOutlineShoppingCart size={28} /></p>
                </div>
            </div>
        </nav>
    )

}