import {Head, Link, useForm, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import {useEffect} from "react";
import Arrow from "@/Components/img/Arrow.png";

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
                <div className="w-full mx-auto">
                    <div className='flex mb-3'>
                        <Link href='/events'>
                            <img
                                src={Arrow}
                                className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                            />
                        </Link>
                        <p className='mx-auto pr-2'>メッセージ</p>
                    </div>
                    <p className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">メッセージ</p>
                    <div id='chat' className="rounded pt-6 pb-8 mb-4 overflow-auto h-96 hidden-scrollbar">
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
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <input
                                id="message"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.message}
                                placeholder='メッセージを入力する'
                                onChange={(e) => setData("message", e.target.value)}
                            />
                            {errors.message && <div className='text-red-600'>{errors.message}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            送信する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page) => <Base children={page} />;

export default Index;
