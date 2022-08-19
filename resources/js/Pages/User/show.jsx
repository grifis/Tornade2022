import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Show = (props) => {
    const {user} = props;
    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Link
                    href={route("events.index")}
                    className="text-blue-600"
                >
                    一覧へ戻る
                </Link>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">プロフィール</h1>
                <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{user.name}</h1>
            </div>
        </div>
    </>;
};

Show.layout = (page) => <Base children={page} />;

export default Show;
