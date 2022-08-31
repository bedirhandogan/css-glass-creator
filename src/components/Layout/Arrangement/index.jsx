import './styles.css';
import {Grid} from "assets";

import {useState} from "react";

export default function Arrangement() {
    const [values, setValues] = useState({
        width: 100,
        height: 100,
        transparency: 25,
        blur: 5,
        radius: 5,
    });

    function handler(value, event) {
        switch (value) {
            case 'width':
                setValues({...values, width: values.width > 300 ? '300' : event.target.value});
                break;
            case 'height':
                setValues({...values, height: values.height > 300 ? '300' : event.target.value});
                break;
            case 'radius':
                setValues({...values, radius: event.target.value});
                break;
            case 'transparency':
                setValues({...values, transparency: event.target.value});
                break;
            case 'blur':
                setValues({...values, blur: event.target.value});
                break;
            default:
                break;
        }
    }

    return (
        <div className={'arrangement'}>
            <div className={'upper-area'}>
                <img src={Grid} alt={'grid icon'} />
            </div>

            <div className={'section'}>
                <h3> Width x Height: <span className={'value'}>{`${values.width} x ${values.height}`}</span> </h3>
                <div>
                    <input
                        type={'number'}
                        value={values.width}
                        onChange={event => handler('width', event) }
                    /> x <input
                        type={'number'}
                        value={values.height}
                        onChange={event =>  handler('height', event)}
                    />
                </div>
            </div>

            <div className={'section'}>
                <h3> Transparency: <span className={'value'}>{values.transparency <= 99 ? `0.${values.transparency}` : '1'}</span> </h3>
                <input type={'range'} value={values.transparency} onChange={event =>  handler('transparency', event)}></input>
            </div>

            <div className={'section'}>
                <h3> Blur: <span className={'value'}>{values.blur}</span> </h3>
                <input type={'range'} max={20} step={0.1} value={values.blur} onChange={event =>  handler('blur', event)}></input>
            </div>

            <div className={'section'}>
                <h3> Border Radius: <span className={'value'}>{values.radius}</span> </h3>
                <input type={'range'} min={1} max={15} value={values.radius} onChange={event =>  handler('radius', event)}></input>
            </div>
        </div>
    )
}