import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBanners } from "../../redux/actions/bannerActions";

const Banner = () => {
  const banners = useSelector((state) => state.allBanners.banners);
  const dispatch = useDispatch();
  // const { title, image, slug} = banner;
  useEffect(() => {
    dispatch(fetchBanners());
  }, []);

  console.log({ banners });

  // const renderListBanner = banners.map((banner) => {
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 pb-5">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid" src={banners.image} alt="" />
            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(53, 53, 53, .7)" }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-8 text-center">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                      Welcome To Himalayan Consultant Family.
                    </h5>
                    <h1 className="display-3 text-white animated slideInDown mb-4">
                      {banners.title}
                    </h1>
                    <p className="fs-5 fw-medium text-white mb-4 pb-2">
                      {banners.slug}
                    </p>
                    <Link
                      to="/"
                      className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                    >
                      Read More
                    </Link>
                    {/* <Link to ="/" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Free Quote</Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </div>
  );
  // });

  // return <>{renderListBanner}</>;
};

export default Banner;
