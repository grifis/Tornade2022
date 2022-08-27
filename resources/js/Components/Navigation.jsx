import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import "./Navigation.css";

const Navigation = () => {
    const { url } = usePage();
    const { auth } = usePage().props;
    const tabStyle = "tabStyle";
    const eventTabFocusStyle = "eventTabFocusStyle";
    const venueTabFocusStyle = "venueTabFocusStyle";

    // const eventCreate = (
    //     <Link href="/events/create"
    //           className={url === "/events/create" ? tabFocusStyle : tabStyle}>
    //         イベントを考える
    //     </Link>
    // );
    // const venueCreate = (
    //     <Link href='/venues/create'
    //           className={url === '/venues/create' ? tabFocusStyle : tabStyle}>
    //         開催地を紹介する
    //     </Link>
    // );

    return (
        <>
            <nav className="grid grid-cols-2 divide-x divide-black">
                <Link
                    href="/events"
                    className={`${
                        url === "/events" ? eventTabFocusStyle : tabStyle
                    } text-center py-2`}
                >
                    イベントを見る
                </Link>
                <Link
                    href="/venues"
                    className={`${
                        url === "/venues" ? venueTabFocusStyle : tabStyle
                    } text-center py-2`}
                >
                    開催地を見る
                </Link>
                {/* {!auth.owner && eventCreate}
                {!auth.user && venueCreate}
                {auth.user && (
                    <Link href={`/users/${auth.user.id}`}
                          className={url === `/users/${auth.user.id}` ? tabFocusStyle : tabStyle}>
                        プロフィール
                    </Link>
                )} */}
            </nav>
        </>
    );
};

export default Navigation;
