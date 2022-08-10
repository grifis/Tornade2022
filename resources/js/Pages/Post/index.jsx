import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Index = (props) => {
    console.log(props.posts);
    return <>
        {/* text - start */}
        <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">タイムライン</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">このページでみなさんが投稿した体験記を見ることができます。</p>
        </div>
        {/* text - end */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
                {props.posts.map((post) => (
                    <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                        <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                            <img
                                src="https://pbs.twimg.com/profile_images/1526071782029262848/bf_oSvIC_400x400.jpg"
                                loading="lazy" alt="Photo by Minh Pham"
                                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"/>
                        </a>

                        <div className="flex flex-col flex-1 p-4 sm:p-6">
                            <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                <a href={`/posts/${post.id}`}
                                   className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{post.title}</a>
                            </h2>

                            <p className="text-gray-500 mb-8">{post.body}</p>

                            <div className="flex justify-between items-end mt-auto">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"
                                            loading="lazy" alt="Photo by Brock Wegner"
                                            className="w-full h-full object-cover object-center"/>
                                    </div>

                                    <div>
                                        <span className="block text-indigo-500">{post.user.name}</span>
                                        <span className="block text-gray-400 text-sm">{post.created_at.substr(0, 10)}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            {/* article - start */}

            {/* article - end */}
        </div>
    </>;
}

Index.layout = (page) => <Base children={page} />;

export default Index;
