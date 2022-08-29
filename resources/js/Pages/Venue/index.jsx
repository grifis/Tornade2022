import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import NavSearch from "../../Components/NavSearch";
import Selection from "../../Components/Selection";
import VenueTestIndex from "./VenueTestIndex";
import Fes from "../../Components/img/fes.jpg";
import Camp from "../../Components/img/camp.jpg";
import Fireworks from "../../Components/img/fireworks.jpg";

const Index = (props) => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 mx-4 sm:mx-2">
                {/* 検索ボックスここから*/}
                <NavSearch />
                {/* 検索ボックスここまで */}

                {/* 条件セレクターここから */}
                <div className="flex justify-around">
                    <Selection title="開催場所" />
                    <Selection title="開催時期" />
                    <Selection title="カテゴリ" />
                    <Selection title="人数" />
                </div>
                {/* 条件セレクターここまで */}

                {/* イベント一覧ここから */}
                {props.venues.map((venue) => (
                    <VenueTestIndex
                        image={Camp}
                        color="border-yellow-200"
                        status="東京"
                        description={venue.name}
                        name={venue.owner.name}
                        venueId={venue.id}
                    />
                ))}
                {/*<VenueTestIndex*/}
                {/*    image={Camp}*/}
                {/*    color="border-yellow-200"*/}
                {/*    status="東京"*/}
                {/*    description="新宿御苑でピクニックをしましょう！現在企画中！一緒に盛り上げてくれる仲間を探してます！"*/}
                {/*    name="若林正恭"*/}
                {/*/>*/}
                {/*<VenueTestIndex*/}
                {/*    image={Fes}*/}
                {/*    color="border-green-200"*/}
                {/*    status="栃木"*/}
                {/*    description="中規模な音楽フェスを関東で開きたいと考えています！開催地の提供をしてくださる方を募集しています！"*/}
                {/*    name="春日俊彰"*/}
                {/*/>*/}
                {/*<VenueTestIndex*/}
                {/*    image={Fireworks}*/}
                {/*    color="border-red-200"*/}
                {/*    status="静岡"*/}
                {/*    description="9/15に花火大会を熱海で開催します！25分間の水上花火を打ち上げます！ぜひ見にきてください！"*/}
                {/*    name="有吉弘行"*/}
                {/*/>*/}
                {/* イベント一覧ここまで */}
                {/* article - end */}
            </div>
        </>
    );
};

Index.layout = (page) => <Base children={page} />;

export default Index;
