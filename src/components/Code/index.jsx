import './styles.css';
import { CopyBlock, dracula } from "react-code-blocks";
import PropTypes from 'prop-types';
import { SaveCopy } from 'assets';
import ItemList from "components/Code/components/ItemList";
import {useEffect, useState} from "react";

function Code({code, values}) {
    const [query, setQuery] = useState(false);
    const PrevStorage = localStorage.getItem('list');

    useEffect(() => {
        if (!PrevStorage) {
            localStorage.setItem('list', JSON.stringify([]));
        }
    });

    function handleClick() {
        const items = JSON.parse(PrevStorage);
        const uuid = Math.floor((Math.random() * Date.now()) * Math.random());

        items.push({
            id: uuid,
            color: values.color,
            width: values.width,
            height: values.height,
            transparency: values.transparency,
            blur: values.blur,
            outline: values.outline,
            radius: values.radius,
        });
        localStorage.setItem('list', JSON.stringify(items));
        setQuery(true);
    }

    return (
        <div className={'code'}>
            <div className={'upper-area'}>
                Code
            </div>
            <div className={'code-container'}>
                <h3>CSS:</h3>
                <button className={'save-copy'} onClick={handleClick}>
                    <img src={SaveCopy} alt={'save icon'} />
                </button>
                <CopyBlock
                    text={code}
                    language='css'
                    theme={dracula}
                    codeBlock
                />
            </div>

            <ItemList query={query} setQuery={setQuery} />
        </div>
    )
}

Code.propTypes = {
    code: PropTypes.string,
    values: PropTypes.object
}

export default Code;