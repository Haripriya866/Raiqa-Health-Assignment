import { RxCross2 } from "react-icons/rx";

import './index.css'

const ListView=(props)=>{
    const {countDetails}=props;
    const {count,id}=countDetails;

    return(
        <>
            <li className='count-list-item'>
                <div className='count-id'>
                    <p className='list-item-count'>{count}</p>
                    <p className='list-item-id'>#{id}</p>
                </div>
                <RxCross2 size='20px' color="#7e858e" />
            </li>
        </>
    )
}
export default ListView