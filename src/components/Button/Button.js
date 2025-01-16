import PropTypes from 'prop-types'; 
export default function Button({loadMore, page}){
    return(
        <button className="Button" type="button" onClick={()=>loadMore()}>Load more {page}</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
}