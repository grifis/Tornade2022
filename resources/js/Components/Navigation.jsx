import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Navigation = () => {

    const { url } = usePage();
    const { auth } = usePage().props;
    const tabStyle = "text-gray-600 hover:text-red-500 active:text-indigo-700 text-lg font-semibold transition duration-100 ";
    const tabFocusStyle = `inline-flex items-center text-red-500 text-lg font-semibold gap-1 border-b-2 border-red-500`;

    const eventCreate = (
        <Link href="/events/create"
              className={url === "/events/create" ? tabFocusStyle : tabStyle}>
            イベントを考える
        </Link>
    );
    const venueCreate = (
        <Link href='/venues/create'
              className={url === '/venues/create' ? tabFocusStyle : tabStyle}>
            開催地を紹介する
        </Link>
    );

    return (
            <nav className="flex sm:gap-12 gap-6 border-b-2 border-grey-200">
                <Link href="/events"
                      className={url === "/events" ? tabFocusStyle : tabStyle}>
                    イベント一覧
                </Link>
                <Link href="/venues"
                      className={url === "/venues" ? tabFocusStyle : tabStyle}>
                    開催地一覧
                </Link>
                {!auth.owner && eventCreate}
                {!auth.user && venueCreate}
                {auth.user && (
                    <Link href={`/users/${auth.user.id}`}
                          className={url === `/users/${auth.user.id}` ? tabFocusStyle : tabStyle}>
                        プロフィール
                    </Link>
                )}
            </nav>
    );

};

export default Navigation;
