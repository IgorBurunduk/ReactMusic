import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

function FilterButton(props) {
    const filterButtonClasses = classNames({
        [`${props.btnClasses}`]: true,
        active: props.filterVar === props.openedFilter,
    })
    const [posLeft, setPosLeft] = useState(0)
    const [posTop, setPosTop] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const elementRect = ref.current.getBoundingClientRect()
        const containerWrap = document.querySelector('.wrapper > .container')
        const containerRect = containerWrap.getBoundingClientRect()

        // eslint-disable-next-line no-console
        console.log(elementRect)
        // eslint-disable-next-line no-console
        console.log(containerWrap)

        setPosLeft(elementRect.left - containerRect.left)
        setPosTop(elementRect.top + ref.current.clientHeight)
    })

    const handleClick = () => {
        props.setOpenFilter(props.filterVar)

        if (filterButtonClasses.split(' ').includes('active')) {
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
