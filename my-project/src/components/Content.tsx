import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Timer from "./Timer";

type Slide = {
  item: string;
};

export default function Content() {
  const nfts = [
    "swiperImage1",
    "swiperImage2",
    "swiperImage3",
    "swiperImage4",
    "swiperImage5",
  ];

  const Slide = ({ item }: Slide) => {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 5) + 1;
    };

    return (
      <div className="slide">
        <div
          style={{ backgroundImage: `url(/${item}.png)` }}
          className="slide-image"
        >
          <Timer />
        </div>
        <h3 className="slide-name">SunGlass</h3>
        <div className="slide-content">
          <div className="slide-info">
            <p className="slide-info-target">Current bid</p>
            <p className="slide-info-price">
              <img src="/etherium.svg" alt="" />
              {getRandomNumber()}
            </p>
          </div>
          <button className="slide-button">PLACE BID</button>
        </div>
      </div>
    );
  };

  return (
    <div className="content">
      <div className="content-presentation">
        <div className="content-text">
          <h3 className="content-add">
            <hr style={{ height: "1px", width: "20%", margin: "0" }} />
            OVER 1M CREATORS
          </h3>
          <h1 className="content-header">Discover And Create NFTs</h1>
          <p className="content-description">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a $20 bonus.
          </p>
          <div className="content-button-group">
            <button className="content-explore-button">EXPLORE MORE</button>
            <button className="content-create-button">CREATE NFT</button>
          </div>
        </div>
        <div
          style={{
            height: "300px",
            width: "100%",
            display: "block",
            position: "static",
          }}
        >
          <div className="content-images">
            <img
              className="content-image-first"
              src="presentationImage1.svg"
              alt=""
            />
            <img
              className="content-image-second"
              src="presentationImage2.svg"
              alt=""
            />
            <img
              className="content-image-overlay"
              src="presentationOverlay.svg"
              alt=""
            />
            <img
              className="content-image-arrow"
              src="presentationArrow.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="content-product">
        <h2 className="content-product-header">Weekly - Top NFT</h2>
        <div className="content-swiper">
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            navigation={{
              enabled: true,
              prevEl: '.content-navigation-prev',
              nextEl: '.content-navigation-next',
            }}
            freeMode={{
              enabled: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {nfts.map((nft) => (
              <SwiperSlide key={nft}>
                <Slide item={nft} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="content-navigation">
          <button className="content-navigation-prev"><img style={{width: "100%", padding: "30%"}} src="/prevContent.svg" alt="" /></button>
          <button className="content-navigation-next"><img style={{width: "100%", padding: "30%"}} src="/nextContent.svg" alt="" /></button>
        </div>
      </div>
    </div>
  );
}
