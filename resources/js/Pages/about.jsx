import Layout from "../Layouts/Layout";
import { Head, usePage } from "@inertiajs/inertia-react";

const About = () => {
    const { appName } = usePage().props;
    return (
        <>
            <Head>
                <title>Aboutページ</title>
            </Head>
            <h1>About | {appName}</h1>
        </>
    );
};
About.layout = (page) => <Layout children={page} />;


export default About;
