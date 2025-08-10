import {useState,useMemo, useEffect} from 'react'

import {BsPlusCircle, BsDashCircle} from 'react-icons/bs'

import ListView from '../ListView';
import './index.css';

const sortbyOptions = [
  {
    optionId: 'ASC',
    displayText: 'Counter (Low-High)',
  },
  {
    optionId: 'DESC',
    displayText: 'Counter (High-Low)',
  },
]

const Counter=()=>{
    const [count,setCount]=useState(0)
    const [activeOptionId,setActiveOptionId]=useState(sortbyOptions[0].optionId)
    const [countList,setCountList]=useState(()=>{
        const savedList = localStorage.getItem('countList')
        return savedList?JSON.parse(savedList):[]
    })

    useEffect(()=>{
        localStorage.setItem('countList',JSON.stringify(countList))
    },[countList])

    const sortedList = useMemo(() => {
    const listCopy = [...countList]
    if (activeOptionId === 'ASC') {
      return listCopy.sort((a, b) => a.count - b.count)
    }
    return listCopy.sort((a, b) => b.count - a.count)
  }, [countList, activeOptionId])

    const onDecrementCount = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    const onIncrementCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    const onChangeSortby=(event)=>{
        setActiveOptionId(event.target.value)
    }

    const onClickAddList=()=>{
        const alreadyExists=countList.some((eachItem)=>eachItem.count===count)
        if(!alreadyExists){
            const newList={
            id: countList.length+1,
            count,
            }
            setCountList(prevCountsList => [...prevCountsList, newList])
        }
        
    }

    const onClickReset=()=>(
        setCount(0),
        setCountList([]),
        localStorage.removeItem('countList')

    )

    const renderEmptyCountView = () =>{
        return(
            <div className='empty-count-view-container'>
                <p className='empty-count-view'>No numbers added yet. Use the counter above to add some! </p>
            </div>
        )
    }
    

    const renderCounts=()=>(
        <ul className='list-view-container'>
            {
                sortedList.map((eachCount)=>(
                    <ListView key={eachCount.id} countDetails={eachCount} />
                ))
            }
        </ul>
    )
    return(
        <>
        <div className='counter-and-list-app-container'>
            <h1 className='main-heading'>Counter & List App</h1>
            <div className='count-card'>
                <h3 className='counter-heading'>Counter</h3>
                <div className="increment-decrement-buttons-count-container">
                    <button
                    type="button"
                    className="count-button"
                    onClick={onDecrementCount}
                    disabled={count === 0}
                    >
                    <BsDashCircle className="count-icon" />
                    </button>
                    <p className="count-value">{count}</p>
                    <button
                        type="button"
                        className="count-button"
                        onClick={onIncrementCount}
                    >
                    <BsPlusCircle className="count-icon" />
                    </button>
                </div>
                <div className='add-list-button-container'>
                    <button type="button" 
                    className="add-to-list-button" 
                    onClick={onClickAddList}
                    disabled={count === 0}
                    >
                    Add to List
                    </button>
                </div>
            </div>
            <div className='list-view-card'>
                <div className='list-view-top-container'>
                    <h3 className='numbers-list-sub-heading'>Numbers List</h3>
                    <div className='reset-sort-container'>
                        <button type='button' className='reset-button' onClick={onClickReset}>
                            Reset
                        </button>
                        <select
                        className="sort-by-select"
                        value={activeOptionId}
                        onChange={onChangeSortby}
                        >
                        {sortbyOptions.map(eachOption => (
                            <option
                            key={eachOption.optionId}
                            value={eachOption.optionId}
                            className="select-option"
                            >
                            {eachOption.displayText}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
                {countList.length === 0 ? renderEmptyCountView() : renderCounts()}
            </div>
        </div>
        </>
    )
}
export default Counter