import React from 'react';
import Logo from "@/Components/img/logo1.svg";
import LogoName from "@/Components/img/logo4.svg";

export default function ApplicationLogo({ className }) {
    return (
        <div className="flex gap-3 items-center">
            <img src={Logo} alt="Icon" className="w-8"></img>
            <img src={LogoName} alt="Icon" className="w-28"></img>
        </div>
    );
}
