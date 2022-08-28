import React from "react";
import Vector from "../../Components/img/Vector.png";
import Meeting from "../../Components/img/Meeting.png";
import Gas from "../../Components/img/Gas.png";
import { Link } from "@inertiajs/inertia-react";

export default function TestIndex(props) {
    return (
        <>
            <div className="bg-white rounded-lg">
                <img src={props.image} className="rounded-lg"/>
                <div className="px-4 py-4 flex flex-col gap-1">
                    <h2 className={`text-xs border-2 rounded-2xl pl-1 inline-block ${props.color}`}>{props.status}</h2>
                    <Link href={`/events/show/${props.eventId}`}>{props.description}</Link>
                    <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                            <img
                                src={props.iconPath}
                                loading="lazy"
                                alt="Photo by Brock Wegner"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <Link href={`/users/${props.userId}`}>{props.name}</Link>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <img src={Meeting} />
                            <h5>3</h5>
                            <div className="absolute left-24 w-7 h-7 bg-gray-400 rounded-full"></div>
                            <div className="absolute left-28 w-7 h-7 bg-gray-600 rounded-full"></div>
                            <div className="absolute left-32 w-7 h-7 bg-gray-800 rounded-full"></div>
                        </span>

                        <span className="flex items-center">
                            <img src={Gas} />
                            <h5>15</h5>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
