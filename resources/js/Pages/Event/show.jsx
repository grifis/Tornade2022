import {Link, usePage} from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Show = (props) => {
    const {event, operatorsId} = props;
    const { auth } = usePage().props;

    const { post } = useForm({
    });

    function handleClick(e) {
        e.preventDefault();
        post(`/events/operator/${event.id}`);
    }

    const unjoined = (
        <button onClick={handleClick} className="text-center bg-gradient-to-br from-green-300 to-green-800 hover:bg-gradient-to-tl text-white rounded px-4 py-2">
            運営に加わる
        </button>
    )

    const joined = (
        <Link href={`/events/messages/${event.id}`} className="text-blue-600">グループチャットを見にいく</Link>
    )

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link
                    href={route("events.index")}
                    className="text-blue-600"
                >
                    一覧へ戻る
                </Link>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">イベント名：{event.title}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">詳細：{event.description}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">状態：{event.status}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-4 md:mb-6 text-center">企画者：{event.user.name}</h1>
                <div className='text-center'>
                    {operatorsId.includes(auth.user?.id) ? joined : unjoined}
                </div>
            </div>
        </div>
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
