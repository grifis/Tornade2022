import { Link, usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Arrow from "../../Components/img/Arrow.png";
import Vector from "../../Components/img/Vector.png";
import Yukata from "../../Components/img/Yukata.png";
import Twitter from "../../Components/img/Twitter.png";
import LinkIcon from "../../Components/img/Link.png";
import Label from "../../Components/img/label.png";
import Gas from "../../Components/img/Gas.png";
import "./EventShow.css";
import React from "react";

const Show = (props) => {
    const { event, operatorsId } = props;
    console.log(event);
    const { auth } = usePage().props;

    const { post } = useForm({});

    function handleClick(e) {
        e.preventDefault();
        post(`/events/operator/${event.id}`);
    }

    const unjoined = (
        <button
            onClick={handleClick}
            className="button-right border border-black rounded-md py-4 px-1 font-bold"
        >
            運営に参加する
        </button>
    );

    const joined = (
            <button className="bg-green-400 border border-black rounded-md py-4 px-1 font-bold">
                <Link href={`/events/messages/${event.id}`}>チャットを見る</Link>
            </button>
    );

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="relative mb-2">
                    <Link
                        href={route("events.index")}
                        className="text-blue-600 absolute"
                    >
                        <img
                            src={Arrow}
                            className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                        />
                    </Link>
                    <img
                        src={Arrow}
                        className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                    />
                    <h2 className="bg-white mx-auto text-center w-1/2 text-xs border border-2 border-yellow-200 rounded-xl">
                        {event.status}
                    </h2>
                </div>
                <div className="max-w-screen-md px-2 py-8 md:px-8 mx-auto flex flex-col gap-5">
                    <h1 className="text-gray-800 text-xl sm:text-3xl font-bold mb-4 md:mb-6">
                        {event.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                            <img
                                src={event.user.icon_path}
                                loading="lazy"
                                alt="Photo by Brock Wegner"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <Link href={`/users/${event.user.id}`}><span className="text-xl">{event.user.name}</span></Link>
                    </div>
                    <img src={event.image_path} className="rounded" />
                    <div>
                        <h2 className="font-bold">イベントについて</h2>
                        <p className="text-gray-800 mb-4 md:mb-6 font-bold">
                            {event.description.split('\n').map(t => (<p>{t}</p>))}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">募集したい人</h2>
                        <p className="font-bold flex">
                            {event.operator_requirement.split('\n').map(t => (<p>{t}</p>))}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">応募条件</h2>
                        <ul className="font-bold">
                            {event.conditions.split('\n').map(t => (<p>{t}</p>))}
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                            <img
                                src={event.user.icon_path}
                                loading="lazy"
                                alt="Photo by Brock Wegner"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold">{event.user.name}</h3>
                            <p className="font-bold text-xs">
                                {event.user.one_word}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border border-black rounded-md py-4 px-1 font-bold">
                            <Link href={`/users/${event.user.id}`}>プロフィール</Link>
                        </button>
                        {operatorsId.includes(auth.user?.id)
                            ? joined
                            : unjoined}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <a href={`https://twitter.com/intent/tweet?text=一緒に${event.title}に参加しよう！詳しくは下のリンクから見てね！&url=https://tornade2022.herokuapp.com/events/${event.id}&hashtags=Tornado2022`} class="twitter-share-button" data-show-count="false">
                                <img
                                src={Twitter}
                                className="w-10 h-10 border border-black rounded-full p-2"
                                />
                            </a>
                            <img
                                src={LinkIcon}
                                className="w-10 h-10 border border-black rounded-full p-2"
                            />
                            <img src={Label} className="w-10 h-10 p-2" />
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-xs">応援する</span>
                            <img src={Gas} />
                            <span>15</span>
                        </div>
                    </div>
                    <span className="font-bold text-xs">
                        現在の運営メンバー
                    </span>
                    <div className="flex">
                        <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                            <Link href={`/users/${event.user.id}`}><img
                                src={event.user.icon_path}
                                loading="lazy"
                                alt="Photo by Brock Wegner"
                                className="w-full h-full object-cover object-center"
                            /></Link>
                        </div>
                        {event.operators.map((operator) => (
                            <div className="w-12 h-12 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                <Link href={`/users/${operator.user.id}`}><img
                                    src={operator.user.icon_path}
                                    loading="lazy"
                                    alt="Photo by Brock Wegner"
                                    className="w-full h-full object-cover object-center"
                                /></Link>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3">
                        <span className="px-1 border border-2 border-yellow-200 rounded-md">
                            #浴衣
                        </span>
                        <span className="px-1 border border-2 border-yellow-200 rounded-md">
                            #夏
                        </span>
                        <span className="px-1 border border-2 border-yellow-200 rounded-md">
                            #文化祭
                        </span>
                        <span className="px-1 border border-2 border-yellow-200 rounded-md">
                            #お祭り
                        </span>
                        <span className="px-1 border border-2 border-yellow-200 rounded-md">
                            #静岡
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

Show.layout = (page) => <Base children={page} />;

export default Show;
