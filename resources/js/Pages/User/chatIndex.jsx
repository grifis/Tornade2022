import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Arrow from "@/Components/img/Arrow.png";

const ChatIndex = (props) => {
    const { auth } = usePage().props;
    const {matchedVenues, operatorEvents, plannerEvents} = props;
    console.log(matchedVenues);

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md md:px-8 mx-auto">
                <div className='flex mb-3'>
                    <button>
                        <img
                            src={Arrow}
                            className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                        />
                    </button>
                    <p className='mx-auto pr-2'>メッセージ</p>
                </div>
                <Head title="投稿作成"></Head>
                {matchedVenues?.map((combi) => (
                    <div className='mb-5 bg-gray-100 px-4 py-4'>
                        <div className="flex items-center gap-1.5">
                            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                <img
                                    src='https://res.cloudinary.com/dxn30zcfs/image/upload/v1660977936/cld-sample-2.jpg'
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <Link
                                href={`/apply/messages?event_id=${combi.event_id}&venue_id=${combi.venue.id}`}
                                className="text-blue-600"
                            >
                                {`${combi.venue.name.substr(0,14)}...`}
                            </Link>
                        </div>
                    </div>
                ))}
                {operatorEvents.map((event) => (
                    <div className='mb-5 bg-gray-100 px-4 py-4'>
                        <div className="flex items-center gap-1.5">
                            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                <img
                                    src='https://res.cloudinary.com/dxn30zcfs/image/upload/v1660977936/cld-sample-2.jpg'
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <Link
                                href={`/events/messages/${event.id}`}
                                className="text-blue-600"
                            >
                                {`${event.title.substr(0,14)}...`}
                            </Link>
                        </div>
                    </div>
                ))}
                {plannerEvents.map((event) => (
                    <div className='mb-5 bg-gray-100 px-4 py-4'>
                        <div className="flex items-center gap-1.5">
                            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                <img
                                    src='https://res.cloudinary.com/dxn30zcfs/image/upload/v1660977936/cld-sample-2.jpg'
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <Link
                                href={`/events/messages/${event.id}`}
                                className="text-blue-600"
                            >
                                {`${event.title.substr(0,14)}...`}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

ChatIndex.layout = (page) => <Base children={page} />;

export default ChatIndex;
