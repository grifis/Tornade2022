import Layout from "../Layouts/Layout";

const Test = () => {
    return <h1>test</h1>;
};
Test.layout = (page) => <Layout children={page} />;

export default Test;
