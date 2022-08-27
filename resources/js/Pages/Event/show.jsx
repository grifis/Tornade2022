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

const Show = (props) => {
    const { event, operatorsId } = props;
    const { auth } = usePage().props;

    const { post } = useForm({});

    function handleClick(e) {
        e.preventDefault();
        post(`/events/operator/${event.id}`);
    }

    const unjoined = (
        <button
            onClick={handleClick}
            className="text-center bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2"
        >
            運営に加わる
        </button>
    );

    const joined = (
        <Link href={`/events/messages/${event.id}`} className="text-blue-600">
            グループチャットを見にいく
        </Link>
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
                        <img src={Vector} />
                        <span className="text-xl">{event.user.name}</span>
                    </div>
                    <img src={Yukata} className="rounded" />
                    <div>
                        <h2 className="font-bold">イベントについて</h2>
                        <p className="text-gray-800 mb-4 md:mb-6 font-bold">
                            {event.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">募集したい人</h2>
                        <p className="font-bold flex">
                            大学に入ってから文化祭楽しんでないな、何かイベント運営に関わってみたいけどサークルに入り損ねてしまった人、オフラインでの繋がりを作りたい人などに、ぜひ一緒に運営してもらいたいと思っています！みんなで楽しい浴衣コンテストを作りませんか？
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold">応募条件</h2>
                        <ul className="font-bold">
                            <li>・高校3年生〜大学生、大学院生</li>
                            <li>・週に1回のオンラインMTGに参加できる人</li>
                            <li>・開催地（静岡）に当日来れる人</li>
                            <li>
                                ・オフラインイベントを成功させたい！という気持ち
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-2">
                        <img src={Vector} className="w-1/4" />
                        <div>
                            <h3 className="font-bold">{event.user.name}</h3>
                            <p className="font-bold text-xs">
                                ひとことひとことひとことひとことひとことひとことひとことひとことひとことひとこと
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="border border-black rounded-md py-4 px-1 font-bold">
                            プロフィール
                        </button>
                        <button className="button-right border border-black rounded-md py-4 px-1 font-bold">
                            運営に参加する
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <img
                                src={Twitter}
                                className="w-10 h-10 border border-black rounded-full p-2"
                            />
                            <img
                                src={LinkIcon}
                                className="w-10 h-10 border border-black rounded-full p-2"
                            />
                            <img src={Label} className="w-10 h-10 p-2" />
                        </div>
                        <div className="flex items-center">
                            <span className="font-bold text-xs">応募する</span>
                            <img src={Gas} />
                            <span>15</span>
                        </div>
                    </div>
                    <span className="font-bold text-xs">
                        現在の運営メンバー
                    </span>
                    <div className="flex">
                        <img src={Vector} />
                        <img src={Vector} />
                        <img src={Vector} />
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
                    <div className="text-center">
                        {operatorsId.includes(auth.user?.id)
                            ? joined
                            : unjoined}
                    </div>
                </div>
            </div>
        </>
    );
};

Show.layout = (page) => <Base children={page} />;

export default Show;
