import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { retrieveValue } from './delayed-reaction';

const GetValue = () => {
    const dispatch = useDispatch();
    const [newValue, setNewValue ] = useState(0);
    const sendValue = (e) => {
        e.preventDefault();
        setNewValue({value:''});
        dispatch(retrieveValue({newValue}));
    }

    return (
        <div>
            <button onClick={sendValue}>Retrieve Value</button>
        </div>
    );
};

export default GetValue;