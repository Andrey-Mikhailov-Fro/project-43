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
      return Math.floor(Math.random() * 50) / 10 + 1;
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
          <div className="content-stats">
            <div>
              <h2 className="content-stats-number">430K+</h2>
              <p className="content-stats-category">Art Works</p>
            </div>
            <div>
              <h2 className="content-stats-number">159K+</h2>
              <p className="content-stats-category">Creators</p>
            </div>
            <div>
              <h2 className="content-stats-number">87K+</h2>
              <p className="content-stats-category">Collections</p>
            </div>
          </div>
        </div>
        <div className="content-presentation-container">
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
      <div style={{ position: "relative", width: "100%", height: "620px" }}>
        <div className="content-product">
          <h2 className="content-product-header">Weekly - Top NFT</h2>
          <div className="content-swiper">
            <Swiper
              modules={[Navigation, FreeMode]}
              spaceBetween={50}
              slidesPerView={2}
              loop={true}
              centeredSlides={true}
              navigation={{
                enabled: true,
                prevEl: ".content-navigation-prev",
                nextEl: ".content-navigation-next",
              }}
              freeMode={{
                enabled: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 150,
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
            <button className="content-navigation-prev">
              <img
                style={{ width: "100%", padding: "40%" }}
                src="/prevContent.svg"
                alt=""
              />
            </button>
            <button className="content-navigation-next">
              <img
                style={{ width: "100%", padding: "40%" }}
                src="/nextContent.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <div className="content-end">
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column", width: "60%"}}>
          <div>
            <h2 className="content-end-header">Create and Sell NFTs</h2>
            <p className="content-end-description">World’s Largest NFT Place</p>
          </div>
          <div
            className="content-end-button-group"
          >
            <button className="content-end-explore">Explore More</button>
            <button className="content-end-sell">Sell Artwork</button>
          </div>
        </div>
        <img
          className="content-end-image"
          src="/endContent.svg"
          alt="page-end"
        />
      </div>
    </div>
  );
}
