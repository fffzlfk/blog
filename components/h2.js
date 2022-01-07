import { getAnchor } from "../lib/string-utils";

const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h2 id={anchor}>
            {children}
            <a href={link}>
                ¶
            </a>
        </h2>
    );
};

export default H2;