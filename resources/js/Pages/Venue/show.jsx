import {Link, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const Show = (props) => {
    const { googleApiKey } = usePage().props;
    const {venue} = props;
    const containerStyle = {
        width: "400px",
        height: "400px",
    };

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link
                    href={route("venues.index")}
                    className="text-blue-600"
                >
                    一覧へ戻る
                </Link>
                <EnhancedSwipeableViews enableMouseEvents interval={2000}>
                    {venue.venue_images.map((image) => (
                        <div>
                            <img src={image.image_path}/>
                        </div>
                    ))}
                </EnhancedSwipeableViews>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">開催地：{venue.name}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">住所：{venue.address}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">詳細：{venue.description}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">運営団体：{venue.owner.name}</h1>
            </div>
        </div>
        <div>
            <LoadScript googleMapsApiKey={`${googleApiKey}`} >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                        lat: Number(venue.lat),
                        lng: Number(venue.lng),
                    }}
                    zoom={17}
                ></GoogleMap>
            </LoadScript>
        </div>
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
