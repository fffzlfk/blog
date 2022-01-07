import { getAnchor } from "../lib/string-utils";

const H3 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h3 id={anchor}>
            {children}
            <a href={link}>
                ¶
            </a>
        </h3>
    );
};

export default H3;