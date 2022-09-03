import PropTypes from "prop-types";
import './styles.css';
import {Close, Trash} from "assets";

function ItemList({query, setQuery}) {
    const storage = JSON.parse(localStorage.getItem('list'));

    function removeItem(id) {
        const length = Object.entries(storage).length;
        const index = storage.findIndex(element => element.id === id);
        length > 1 && storage.splice(index, 1);
        localStorage.setItem('list', JSON.stringify(storage));
    }

    function handleClick(event, id) {
        const length = Object.entries(storage).length;
        length > 1 && event.target.parentElement.parentElement.parentElement.remove();
        removeItem(id);
    }

    return (<div className={'saved-list'} style={!query ? {display: 'none'} : {display: 'flex'}}>
        <div className={'list'}>
            <h3>Item List <img src={Close} alt={'close icon'} onClick={() => {
                setQuery(false);
                window.location.reload();
            }  }/></h3>
            <div className={'list-area'}>
                {!localStorage.getItem('list') ? localStorage.setItem("list", []) : storage.map((element, index) => <div
                    className={'item'} key={index}>
                    <h3>UUID: {element.id}
                        <div>
                            <img src={Trash} alt={'trash icon'}
                                 onClick={(event) => handleClick(event, element.id)}/>
                        </div>
                    </h3>
                    <div className={'element'}>
                        <span>Width: <span className={'value'}>{element.width}</span></span>
                        <span>Height: <span className={'value'}>{element.height}</span></span>
                    </div>
                    <div className={'element'}>
                        <span> Color: <span className={'value'}>{element.color}</span></span>
                        <span>Blur: <span className={'value'}>{element.blur}</span></span>
                    </div>
                    <div className={'element'}>
                        <span>Border: <span className={'value'}>{element.outline}</span></span>
                        <span>Radius: <span className={'value'}>{element.radius}</span></span>
                    </div>
                    <div className={'element'}>
                        <span>Transparency: <span className={'value'}>{element.transparency}</span></span>
                    </div>
                </div>)}
            </div>
            <div className={'apply'}>
                <button>
                    Apply
                </button>
            </div>
        </div>
    </div>)
}

ItemList.propType = {
    query: PropTypes.bool, setQuery: PropTypes.func
}

export default ItemList;