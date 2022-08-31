import './styles.css';
import {Grid} from "assets";

export default function Arrangement({values, setValues}) {
    function handler(value, event) {
        switch (value) {
            case 'color':
                setValues(prevState => {
                    return {...prevState, color: event.target.value}
                })
                break;
            case 'width':
                setValues(prevState => {
                    return {...prevState, width: prevState.width > 300 ? '300' : event.target.value}
                });
                break;
            case 'height':
                setValues(prevState => {
                    return {...prevState, height: prevState.height > 300 ? '300' : event.target.value}
                });
                break;
            case 'radius':
                setValues(prevState => {
                    return {...prevState, radius: event.target.value}
                });
                break;
            case 'transparency':
                setValues(prevState => {
                    return {...prevState, transparency: event.target.value}
                });
                break;
            case 'blur':
                setValues(prevState => {
                    return {...prevState, blur: event.target.value}
                });
                break;
            case 'outline':
                setValues(prevState => {
                    return {...prevState, outline: event.target.value}
                });
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
                <h3>Color: <span className={'value'}>{values.color}</span> </h3>
                <input type={'color'} value={values.color} onChange={event => handler('color', event)} />
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
                <h3> Outline: <span className={'value'}>{values.outline <= 99 ? `0.${values.outline}` : '1'}</span> </h3>
                <input type={'range'} value={values.outline} onChange={event =>  handler('outline', event)}></input>
            </div>

            <div className={'section'}>
                <h3> Border Radius: <span className={'value'}>{values.radius}</span> </h3>
                <input type={'range'} min={1} max={15} value={values.radius} onChange={event =>  handler('radius', event)}></input>
            </div>
        </div>
    )
}