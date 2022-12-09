import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import btn from '../../css/btn.module.css'

function FilterButton(props) {
    const filterButtonClasses = classNames({
        [`${props.btnClasses}`]: true,
        [btn.text_active]: props.filterVar === props.openedFilter,
    })
    const [posLeft, setPosLeft] = useState(0)
    const [posTop, setPosTop] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const elementRect = ref.current.getBoundingClientRect()
        const containerWrap = document.querySelector('.wrapper > .container')
        const containerRect = containerWrap.getBoundingClientRect()

        setPosLeft(elementRect.left - containerRect.left)
        setPosTop(elementRect.top + ref.current.clientHeight)
    })

    const handleClick = () => {
        props.setOpenFilter(props.filterVar)

        if (filterButtonClasses.split(' ').includes(btn.text_active)) {
            props.setOpenFilter('')
            props.setPropEl(0)
        }

        const propElCalc = {
            posLeft,
            posTop,
        }

        props.setPropEl(propElCalc)
    }

    return (
        <button
            type="button"
            className={filterButtonClasses}
            onClick={handleClick}
            data-opened={props.filterVar}
            ref={ref}>
            {props.btnText}
        </button>
    )
}

export default FilterButton
