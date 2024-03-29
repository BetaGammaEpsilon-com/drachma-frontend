import React, {useState, useEffect} from "react";
import axios from "axios";
import TitleComponent from "../OtherComponents/TitleComponent";
import MotionComponent from "./MotionComponent";
import MotionHeaderComponent from "./MotionHeaderComponent";
import NewMotionComponent from "./NewMotionComponent";

// Container for the motions components
const MotionsMainScreenComponent = () => {

    const requestUrl = process.env.REACT_APP_BASE_URL + 'tres/motions';

    const [motions, setMotions] = useState([]);

    useEffect(() => {
        const fetchMotions = async() => {
            const result = await axios(
                requestUrl
            );

            setMotions(result.data);
        }
        fetchMotions();
    }, [requestUrl]);

    return (
        <div>
            <TitleComponent />
            <div className='px-5 py-5 grid grid-cols-2 grid-flow-row'>
                <div className='col-start-1 border-2'>
                    <MotionHeaderComponent/>
                    <ul className='pt-2'>
                    {
                        motions.map((motion, index) => 
                            <MotionComponent
                                key={index}
                                date={motion.date_added}
                                motion={motion.motion}
                                />
                        )
                    }
                    </ul>
                </div>
                <div className='col-start-2 ml-10'>
                    <NewMotionComponent />
                </div>
            </div>
        </div>
    );
}

export default MotionsMainScreenComponent;