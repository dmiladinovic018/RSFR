import Head from "./Head";
import Body from "./Body";

const Content = ({id, type, homepage}) => {
    return (
        <>
            <Head />
            <Body id={id} type={type} homepage={homepage} />
        </>
    );
}

export default Content;
