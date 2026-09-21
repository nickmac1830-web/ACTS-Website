import Image from "next/image";

const LIGHT_TOP = "/media/custom-settings-light-top.jpg";
const LIGHT_BOTTOM = "/media/custom-settings-light-bottom.jpg";
const DARK_TOP = "/media/custom-settings-dark-top.jpg";
const DARK_BOTTOM = "/media/custom-settings-dark-bottom.jpg";

export function CustomAuctionPhone() {
  return (
    <div className="custom-auction-phone-wrap">
      <p className="custom-auction-scroll-cue">Scroll the phone to explore settings</p>
      <div className="custom-auction-phone" aria-label="Scrollable ACTS custom auction settings preview">
        <span className="iphone-action-button" aria-hidden="true" />
        <span className="iphone-volume-up" aria-hidden="true" />
        <span className="iphone-volume-down" aria-hidden="true" />
        <div className="custom-auction-screen">
          <span className="dynamic-island" aria-hidden="true" />

          <div className="custom-auction-fixed custom-auction-header" aria-hidden="true">
            <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
            <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
          </div>

          <div
            className="custom-auction-scroll"
            tabIndex={0}
            aria-label="Scroll through the custom auction controls"
          >
            <div className="custom-auction-document">
              <div className="custom-auction-content-crop custom-auction-content-top">
                <Image className="theme-screen-light" src={LIGHT_TOP} alt="ACTS custom auction features and negotiation settings in light mode" width={942} height={2046} unoptimized />
                <Image className="theme-screen-dark" src={DARK_TOP} alt="ACTS custom auction features and negotiation settings in dark mode" width={942} height={2046} unoptimized />
              </div>
              <div className="custom-auction-content-crop custom-auction-content-bottom" aria-hidden="true">
                <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
                <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
              </div>
            </div>
          </div>

          <div className="custom-auction-fixed custom-auction-footer" aria-hidden="true">
            <Image className="theme-screen-light" src={LIGHT_BOTTOM} alt="" width={942} height={2046} unoptimized />
            <Image className="theme-screen-dark" src={DARK_BOTTOM} alt="" width={942} height={2046} unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
}
