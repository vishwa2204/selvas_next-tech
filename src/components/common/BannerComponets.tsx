import { useBannerContentActionStore } from "../../store/bannerContentStore";

function BannerComponets() {
  const { pageTitle, pageDescription, pageImage } =
    useBannerContentActionStore();

  return (
    <>
      {pageTitle && pageDescription && pageImage && (
        <div className="bannerContainer c-cell-10 c-pr c-height-350 c-white">
          <img
            className="c-max-height c-cell-10 c-object-cover"
            src={pageImage}
            alt="Page Banner Image"
          />
          <div className="bannerContentContainer c-pa c-flex-column c-transulate-X50 c-transulate-Y50 c-t50p c-l5">
            <h1>{pageTitle}</h1>
            <p>{pageDescription}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default BannerComponets;
