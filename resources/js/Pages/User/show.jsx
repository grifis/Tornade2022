import {Link, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Show = (props) => {
    const {user} = props;
    const { auth } = usePage().props;
    const edit = (
        <div className='text-center'>
            <Link href={route("users.edit")} className="text-blue-600">
                編集する
            </Link>
        </div>
    )

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link href={route("events.index")} className="text-blue-600">
                    一覧へ戻る
                </Link>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{user.name}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">年齢：{user.age}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">大学：{user.university}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">ひとこと：{user.one_word}</h1>
                { auth.user && edit}
            </div>
        </div>
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
