import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

export default function ImageGalleryItem({ largeImageURL, previewURL, type }) {
  const openModal = () => {
    const modal = basicLightbox.create(
      `
          <div class="modal-content">
            <img
              src=${largeImageURL}
              alt="Example"
            />
          </div>
          `,
      {
        // Optional: Callback to execute when the modal is shown or hidden
        onShow: (modal) => console.log('Modal shown'),
        onClose: (modal) => console.log('Modal closed'),
      }
    );

    modal.show();
  };

  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={previewURL} alt={type} onClick={openModal} />
    </li>
  )
}