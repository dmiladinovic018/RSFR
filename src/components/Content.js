import Head from "./Head";
import Body from "./Body";

function Content({ id, type, homepage }) {
    return (
        <>
            <Head />
            <Body id={id} type={type} homepage={homepage} />
        </>
    );
}

export default Content;
