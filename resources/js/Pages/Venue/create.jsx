import { Inertia } from '@inertiajs/inertia'
import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import {LoadScript} from '@react-google-maps/api';

const Create = () => {
    const { data, setData, post, errors, processing, transform } = useForm({
        name: "",
        address: "",
        description: "",
        lat: '',
        lng: '',
    });
    const { googleApiKey } = usePage().props;

    async function onSubmit(e) {
        e.preventDefault();
        //入力された住所の緯度経度を取得
        let lng = '';
        let lat = '';
        const geocoder = new window.google.maps.Geocoder();
        await geocoder.geocode({ address: data.address }, (results, status) => {
            if (status === 'OK') {
                lng = results[0].geometry.location.lng();
                lat = results[0].geometry.location.lat();
            }
        });
        Inertia.post("/venues/store", {
            ...data,
            lat: lat,
            lng: lng,
        });
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="投稿作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">開催地投稿ページ</h2>
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">開催地名</label>
                            <input
                                id="title"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />
                            {errors.name && <div className='text-red-600'>{errors.name}</div>}
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">住所</label>
                            <textarea
                                id="address"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {setData('address', e.target.value)}}
                            >
                                {data.address}
                            </textarea>
                            <LoadScript googleMapsApiKey={`${googleApiKey}`}>
                            </LoadScript>
                            {errors.address && <div className='text-red-600'>{errors.address}</div>}
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">説明</label>
                            <textarea
                                id="description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {setData('description', e.target.value)}}
                            >
                                {data.description}
                            </textarea>
                            {errors.description && <div className='text-red-600'>{errors.description}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            投稿する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Create.layout = (page) => <Base children={page} />;

export default Create;
