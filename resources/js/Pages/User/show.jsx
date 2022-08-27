import {Link, useForm, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Show = (props) => {
    const {user} = props;
    const { auth } = usePage().props;
    const { post } = useForm({});

    function onSubmit(e) {
        e.preventDefault();
            post(route("logout"));
    }

    const edit = (
        <div className='text-center'>
            <Link href={route("users.edit")} className="text-blue-600">
                編集する
            </Link>
        </div>
    )
    const logout = (
        <form
            onSubmit={onSubmit}
            className="lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8"
        >
            <button className={`inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3 `}>
                ログアウト
            </button>
        </form>
    )

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link href={route("events.index")} className="text-blue-600">
                    一覧へ戻る
                </Link>
                <div className="w-48 h-48 shrink-0 bg-gray-100 rounded-full overflow-hidden mx-auto mb-8">
                    <img
                        src={user.icon_path}
                        loading="lazy" alt="Photo by Brock Wegner"
                        className="w-full h-full object-cover object-center"/>
                </div>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{user.name}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">年齢：{user.age}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">大学：{user.university}</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">ひとこと：{user.one_word}</h1>
                { auth.user && edit }
                { auth.user && logout }
            </div>
        </div>
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
