import Layout from "../../Layouts/Layout";
import { Head, useForm } from "@inertiajs/inertia-react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        password: "",
        avatar: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post("/user");
    }

    return (
        <>
            <Head title="ユーザの登録"></Head>
            <h1>ユーザの登録</h1>
            <div className="w-full max-w-xs mx-auto">
                <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">名前</label>
                        <input
                            id="name"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && <div className='text-red-600'>{errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">メールアドレス:</label>
                        <input
                            id="email"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.email}
                            onChange={(e) => {setData('email', e.target.value)}}
                        />
                        {errors.email && <div className='text-red-600'>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">パスワード:</label>
                        <input
                            id="password"
                            value={data.password}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => {setData('password', e.target.value)}}
                            type="password"
                        />
                        {errors.password && <div className='text-red-600'>{errors.password}</div>}
                    </div>
                    <div>
                        <label htmlFor="avatar">画像:</label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setData("avatar", e.target.files[0])
                            }
                        />
                        {errors.avatar && <div>{errors.avatar}</div>}
                    </div>
                    <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

Create.layout = (page) => <Layout children={page} />;

export default Create;
