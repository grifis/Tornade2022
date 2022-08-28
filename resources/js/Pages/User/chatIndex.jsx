import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Arrow from "@/Components/img/Arrow.png";
import "./chatIndex.css";

const ChatIndex = (props) => {
    const { auth } = usePage().props;
    const {matchedVenues, operatorEvents, plannerEvents, matchedVenuesChats} = props;

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md md:px-8 mx-auto">
                <div className='flex mb-3'>
                    <Link href='/events'>
                        <img
                            src={Arrow}
                            className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                        />
                    </Link>
                    <p className='mx-auto pr-2'>メッセージ</p>
                </div>
                <Head title="投稿作成"></Head>
                {matchedVenues?.map((combi, index) => {
                    const chat = matchedVenuesChats[index];
                    const date = chat ? `${chat?.created_at.substr(5,2)}/${chat?.created_at.substr(8,2)}` : '';
                    const message = chat ? `${chat?.message}` : 'まだメッセージはありません。';
                    return (
                        <div className='mb-2 px-4 py-4'>
                            <div className="flex items-center gap-1.5">
                                <div className='pb-0.5 border-b border-black bg-red-500 rounded-lg '>
                                    <div className="w-16 h-16 shrink-0 bg-gray-100 border border-black rounded-lg overflow-hidden">
                                        <img
                                            src='https://res.cloudinary.com/dxn30zcfs/image/upload/v1660977936/cld-sample-2.jpg'
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <Link
                                        href={`/apply/messages?event_id=${combi.event_id}&venue_id=${combi.venue.id}`}
                                        className="text-xs leading-1"
                                    >
                                        <p className='mb-2 font-bold'>{`${combi.venue.name.substr(0,35)}`}{(Number(combi.venue.name.length) > 35) && '...'}</p>
                                    </Link>
                                    <p className='text-xs text-gray-500'>{message}</p>
                                </div>
                                <p className='text-xs pb-10 text-red-500'>{date}</p>
                            </div>
                        </div>
                    )})}
                {operatorEvents.map((event) => {
                    const chat = event.group_messages[event.group_messages.length-1];
                    const date = chat ? `${chat?.created_at.substr(5,2)}/${chat?.created_at.substr(8,2)}` : '';
                    const message = chat ? `${chat?.message}` : 'まだメッセージはありません。';
                    return (
                        <div className='mb-2 px-4 py-4'>
                            <div className="flex items-center gap-1.5">
                                <div className='pb-0.5 border-b border-black bg-green-500 rounded-lg '>
                                    <div className="w-16 h-16 shrink-0 bg-gray-100 border border-black rounded-lg overflow-hidden">
                                        <img
                                            src={event.image_path}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className='w-3/4'>
                                    <Link
                                        href={`/events/messages/${event.id}`}
                                        className="text-xs leading-1"
                                    >
                                        <p className='mb-2 font-bold'>{`${event.title.substr(0,35)}`}{(Number(event.title.length) > 35) && '...'}</p>
                                    </Link>
                                    <p className='text-xs text-gray-500'>{message}</p>
                                </div>
                                <p className='text-xs pb-10 text-red-500'>{date }</p>
                            </div>
                        </div>
                    )})}
                {plannerEvents.map((event) => {
                    const chat = event.group_messages[event.group_messages.length-1];
                    const date = chat ? `${chat?.created_at.substr(5,2)}/${chat?.created_at.substr(8,2)}` : '';
                    const message = chat ? `${chat?.message}` : 'まだメッセージはありません。';
                    return (
                    <div className='mb-2 px-4 py-4'>
                        <div className="flex items-center gap-1.5">
                            <div className='pb-0.5 border-b border-black bg-green-500 rounded-lg '>
                                <div className="w-16 h-16 shrink-0 bg-gray-100 border border-black rounded-lg overflow-hidden">
                                    <img
                                        src={event.image_path}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className='w-3/4'>
                                <Link
                                    href={`/events/messages/${event.id}`}
                                    className="text-xs leading-1"
                                >
                                    <p className='mb-2 font-bold'>{`${event.title.substr(0,35)}`}{(Number(event.title.length) > 35) && '...'}</p>
                                </Link>
                                <p className='text-xs text-gray-500'>{message}</p>
                            </div>
                            <p className='text-xs pb-10 text-red-500'>{date }</p>
                        </div>
                    </div>
                )})}
            </div>
        </div>
    );
};

ChatIndex.layout = (page) => <Base children={page} />;

export default ChatIndex;
