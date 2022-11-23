import { useEffect, useRef, useState } from 'react'

function FilterButton(props) {
  let classes = props.btnClasses

  if (props.filterVar === props.openedFilter) {
    classes += ' active'
  }

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

    if (classes.split(' ').includes('active')) {
      props.setOpenFilter('')
      props.setPropEl(0)
    }

    const propElCalc = {
      posLeft, posTop
    }
    props.setPropEl(propElCalc)
  }

  return (<button type='button' className={classes} onClick={handleClick}
                  data-opened={props.filterVar} ref={ref}>{props.btnText}</button>)
}


export default FilterButton
