export default function Button({loadMore, page}){
    return(
        <button className="Button" type="button" onClick={()=>loadMore()}>Load more {page}</button>
    )
}