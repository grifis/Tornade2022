import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Index = (props) => {
    return <>
        {/* text - start */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mt-8 mx-4 sm:mx-2">
            {props.events.map((event) => (
                <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                    <div className="flex flex-col flex-1 p-4 sm:p-6">
                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-full overflow-hidden">
                                    <img
                                        src={event.user.icon_path}
                                        loading="lazy" alt="Photo by Brock Wegner"
                                        className="w-full h-full object-cover object-center"/>
                                </div>

                                <div>
                                    <Link href={`/users/${event.user.id}`} className="block text-gray-800">{event.user.name}</Link>
                                    <span className="block text-gray-400 text-sm">{event.created_at.substr(0, 10)}</span>
                                </div>
                            </div>

                        </div>

                        <h2 className="text-gray-800 text-lg font-semibold mb-2">
                            <Link href={`/events/${event.id}`}
                                  className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{event.title}</Link>
                        </h2>

                        <h2 className="text-gray-800 text-lg font-semibold mb-2">
                            状態：{event.status}
                        </h2>

                        <Link href={`/events/${event.id}`} className="text-gray-500 mb-4">{event.description.substr(0, 30)}...続きを読む</Link>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <p className='mr-4'>3</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                            <p className='mr-4'>2</p>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                            <p>5</p>
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
