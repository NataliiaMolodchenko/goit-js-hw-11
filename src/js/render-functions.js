import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");
let lightbox = new SimpleLightbox(".gallery a");

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
      <li>
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
          <p>Likes: ${img.likes} | Views: ${img.views} | Comments: ${img.comments} | Downloads: ${img.downloads}</p>
        </a>
      </li>`
    )
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = "";
}

export function showLoader() {
  loaderEl.style.display = "block";
}

export function hideLoader() {
  loaderEl.style.display = "none";
}