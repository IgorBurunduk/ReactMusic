function FilterButton(props) {
  let classes = props.btnClasses

  if (props.filterVar === props.openedFilter) {
    classes += ' active'
  }


  const handleClick = () => {
    props.setOpenFilter(props.filterVar)
    
    if (classes.split(' ').includes('active')) {
      props.setOpenFilter('')
    }
  }


  return (<button type='button' className={classes} onClick={handleClick}>{props.btnText}</button>)
}


export default FilterButton
