import PropTypes from 'prop-types'; 
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
export default function ImageGallery({data}) {
    //console.log('data:',data);
    
    return (
        <ul className="ImageGallery">
            {data.map(({id, previewURL, largeImageURL, type}, index)=>(
                <ImageGalleryItem key={index} id={id} previewURL={previewURL} largeImageURL={largeImageURL} type={type}/>
            ))}
        </ul>
    )
}

ImageGallery.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
}