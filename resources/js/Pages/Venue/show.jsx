import {Link, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { LoadScript, GoogleMap, Marker, } from '@react-google-maps/api';
import Arrow from "@/Components/img/Arrow.png";
import "./show.css";
import Twitter from "@/Components/img/Twitter.png";
import LinkIcon from "@/Components/img/Link.png";
import Label from "@/Components/img/label.png";
import Gas from "@/Components/img/Gas.png";
const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const Show = (props) => {
    const { googleApiKey } = usePage().props;
    const {venue, isPlanner, isApplied, eventId} = props;
    const containerStyle = {
        width: "85vw",
        height: "250px",
    };

    const applyButton = (
        <button className="bg-yellow-300 border border-black rounded-md py-4 px-1 font-bold w-2/4 my-4">
            <Link href={`/venues/apply/${venue.id}`}>
                ここに企画を提案する
            </Link>
        </button>
    );


    const chatButton = (
        <button className="bg-green-300 border border-black rounded-md py-4 px-1 font-bold w-2/4 my-4">
            <Link href={`/apply/messages?event_id=${eventId}&venue_id=${venue.id}`}>
                チャットを見る
            </Link>
        </button>
    );

    const position = {
        lat: Number(venue.lat),
        lng: Number(venue.lng),
    };

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link
                    href={route("events.index")}
                    className="text-blue-600"
                >
                    <img
                        src={Arrow}
                        className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                    />
                </Link>
                <h1 className="mt-4 text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">{venue.name}</h1>
                <EnhancedSwipeableViews enableMouseEvents interval={2000}>
                    {venue.venue_images.map((image) => (
                        <div className="border border-black rounded-2xl overflow-hidden img_outer">
                            <img src={image.image_path} className='inner_photo'/>
                        </div>
                    ))}
                </EnhancedSwipeableViews>
                <p className="font-bold">開催地の詳細</p>
                <p className="mt-2">
                    {venue.description.split('\n').map(t => (<p>{t}</p>))}
                </p>
                <p className="font-bold mt-4 mb-2">こんなイベントをお待ちしております！</p>
                <p className="mb-4">
                    {venue.requirements.split('\n').map(t => (<p>{t}</p>))}
                </p>
                <LoadScript googleMapsApiKey={`${googleApiKey}`} >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: Number(venue.lat),
                            lng: Number(venue.lng),
                        }}
                        zoom={17}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                </LoadScript>
                <h1 className='mt-2'>住所   {venue.address}</h1>
                <h1 className='mt-2'>運営団体   {venue.owner.name}</h1>
                <h1 className='mt-2'>電話番号   {venue.phone_number}</h1>
            </div>
            <div className="flex justify-end">
                {isPlanner && !isApplied && applyButton}
                {isPlanner && isApplied && chatButton}
            </div>
            <div className="flex justify-between px-4">
                <div className="flex gap-2">
                    <a href={`https://twitter.com/intent/tweet?text=一緒に${venue.name}に参加しよう！詳しくは下のリンクから見てね！&url=https://tornade2022.herokuapp.com/events/${venue.id}&hashtags=Tornado2022`}
                       className="twitter-share-button" data-show-count="false">
                        <img
                            src={Twitter}
                            className="w-10 h-10 border border-black rounded-full p-2"
                        />
                    </a>
                    <img
                        src={LinkIcon}
                        className="w-10 h-10 border border-black rounded-full p-2"
                    />
                    <img src={Label} className="w-10 h-10 p-2"/>
                </div>
                <div className="flex items-center">
                    <span className="font-bold text-xs">応援する</span>
                    <img src={Gas}/>
                    <span>15</span>
                </div>
            </div>

            <div className="flex gap-3 mt-2">
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
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
