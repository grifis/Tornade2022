import Layout from "../../Layouts/Layout";
import {Link} from "@inertiajs/inertia-react";


const Index = (props) => {
    return (
        <>
            <h1>ユーザ一覧</h1>
            <div>
                <Link href={route("user.create")} as="button" type="button" className="bg-lime-400 text-white font-bold py-2 px-5 rounded-full shadow-xl hover:bg-gray-dark hover:text-white">
                    ユーザ登録
                </Link>
            </div>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};
Index.layout = (page) => <Layout children={page} />;

export default Index;
