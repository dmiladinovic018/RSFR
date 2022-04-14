import Head from "./Head";
import Body from "./Body";
import Footer from "./Footer"

function Content({ id, type, homepage }) {
    return (
        <>
            <Head />
            <Body id={id} type={type} homepage={homepage} />
            <Footer />
        </>
    );
}

export default Content;
