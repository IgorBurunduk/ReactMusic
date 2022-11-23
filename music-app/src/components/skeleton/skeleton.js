import ContentLoader from 'react-content-loader'

function Skeleton(props) {
    let result = ''

    if (props.elem === 'sidebar') {
        result = <ContentLoader
            speed={1}
            width={250}
            height={151}
            viewBox='0 0 250 151'
            backgroundColor='#313131'
            foregroundColor='#4e4e4e'
        >
            <path d='M 0 0.491 h 250 v 150 H 0 z' />
        </ContentLoader>
    } else if (props.elem === 'track') {
        result = <ContentLoader
            speed={1}
            width={122}
            height={52}
            viewBox='0 0 122 52'
            backgroundColor='#313131'
            foregroundColor='#4e4e4e'
        >
            <path d='M 0 0.491 h 51 v 51 H 0 z M 63 29.491 h 59 v 15 H 63 z M 63 7.491 h 59 v 15 H 63 z' />
        </ContentLoader>
    } else if (props.elem === 'playlist') {
        result = <ContentLoader
            speed={1}
            width={1107}
            height={52}
            viewBox='0 0 1107 52'
            backgroundColor='#313131'
            foregroundColor='#4e4e4e'
            className='playlist__item'
        >
            <path
                d='M 0 0.491 h 51 v 51 H 0 z M 65 16.491 h 356 v 19 H 65 z M 481 16.491 h 271 v 19 H 481 z M 802 16.491 h 305 v 19 H 802 z' />
        </ContentLoader>
    }
    return result
}

export default Skeleton