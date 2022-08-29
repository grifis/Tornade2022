import {Head, Link, useForm, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import {useEffect} from "react";
import Arrow from "@/Components/img/Arrow.png";
import "./index.css";

const Index = (props) => {
    const { url, component } = usePage();
    const {event, messages} = props;
    const { auth } = usePage().props;
    const { data, setData, get, post, errors, processing } = useForm({
        message: "",
        event_id: `${event.id}`,
    });

    function onSubmit(e) {
        e.preventDefault();
        post("/events/messages/store");
        setData("message", '');
    }

    useEffect(() => {
        Echo.channel('chat').listen('MessageCreated', e => {
            get(url);
        });
        const obj = document.getElementById('chat');
        obj.scrollTop = obj.scrollHeight;
    }, [])

    return (
        <div className="py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md md:px-8 mx-auto">
                <Head title="メッセージ"></Head>
                <div className="w-full mx-auto h-screen">
                    <div className='flex mb-3'>
                        <Link href='/events'>
                            <img
                                src={Arrow}
                                className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                            />
                        </Link>
                        <p className='mx-auto pr-2'>メッセージ</p>
                    </div>
                    <div id='chat' className="rounded pt-6 pb-8 mb-4 overflow-auto hidden-scrollbar h-original">
                        {messages.map((message) => {
                            const someone = (
                                <div className='flex'>
                                    <div>
                                        <p className="text-gray-500 ml-2">{message.user.name}</p>
                                        <p className='border-2 rounded-lg mb-3 px-4 py-2'>{message.message}</p>
                                    </div>
                                </div>
                            )

                            const myself = (
                                <div className='flex'>
                                    <p className='bg-green-100 border-2 rounded-lg mb-3 ml-auto px-4 py-2'>{message.message}</p>
                                </div>
                            )

                            if(message.user.id === auth.user.id){
                                return myself
                            } else {
                                return someone
                            }
                        })}
                    </div>
                    <form onSubmit={onSubmit} className="absolute bottom-0 rounded px-8 pt-6 pb-8 mb-4 text-input-width">
                        <div className="mb-4">
                            <input
                                id="message"
                                type="text"
                                className="h-12 relative shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.message}
                                placeholder='メッセージを入力する'
                                onChange={(e) => setData("message", e.target.value)}
                            />
                            <button type="submit" className='absolute right-9 top-9 text-blue-600'>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect width="31" height="31" fill="url(#pattern0)"/>
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_297_298" transform="scale(0.0104167)"/>
                                        </pattern>
                                        <image id="image0_297_298" width="96" height="96" xlinkHref="data:image/png;base64,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"/>
                                    </defs>
                                </svg>
                            </button>
                            {errors.message && <div className='text-red-600'>{errors.message}</div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <Base children={page} />;

export default Index;
