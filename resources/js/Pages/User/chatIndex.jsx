import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const ChatIndex = (props) => {
    const { auth } = usePage().props;
    const {operatorEvents, plannerEvents} = props;

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="投稿作成"></Head>
                {operatorEvents.map((event) => (
                    <div className='mb-5'>
                        <Link
                            href={`/events/messages/${event.id}`}
                            className="bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2"
                        >
                            {event.title}
                        </Link>
                    </div>
                ))}
                {plannerEvents.map((event) => (
                    <div className='mb-5'>
                        {console.log(event.combinations)}
                        <Link
                            href={`/events/messages/${event.id}`}
                            className="bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2"
                        >
                            {event.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

ChatIndex.layout = (page) => <Base children={page} />;

export default ChatIndex;
