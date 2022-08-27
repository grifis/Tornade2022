import React from "react";
import Favorite from "../../Components/img/Favorite.png";
import Handshake from "../../Components/img/Handshake.png";
import PartyBallon from "../../Components/img/Party Balloon.png";

export default function VenueTestIndex(props) {
    return (
        <>
            <div className="bg-white rounded-lg">
                <img src={props.image} className="rounded-lg" />
                <div className="px-4 py-4 flex flex-col gap-1">
                    <h2
                        className={`text-xs border-2 rounded-2xl pl-1 inline-block ${props.color}`}
                    >
                        {props.status}
                    </h2>
                    <p>{props.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                            <img src={PartyBallon} />
                            <h5>2</h5>
                            <img src={Handshake} />
                            <h5>6</h5>
                        </span>

                        <span className="flex items-center">
                            <img src={Favorite} />
                            <h5>15</h5>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
