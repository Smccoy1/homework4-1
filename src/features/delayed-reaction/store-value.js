import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { storeValue } from './delayed-reaction-slice';

const StoreValue = () => {
    const dispatch = useDispatch();
    const [newValue, setNewValue ] = useState('');
    const sendValue = (e) => {
        e.preventDefault();
        dispatch(storeValue(newValue));
    }

    return (
        <div>
            <input placeholder="Add Value" type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)}></input>
            <button onClick={sendValue}>Store Value</button>
        </div>
    );
};

export default StoreValue;