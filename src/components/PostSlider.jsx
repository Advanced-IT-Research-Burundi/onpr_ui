import React, { useEffect } from 'react'
import '../assets/styles/postslider.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import $ from 'jquery'

function PostSlider() {
    useEffect(() => {
        let destroyed = false
    
        // Expose jQuery globally for plugins
        if (typeof window !== 'undefined') {
          window.$ = window.jQuery = $;
        }
    
        // Dynamically load plugin then init
        import('owl.carousel/dist/owl.carousel.js')
          .then(() => {
            if (!destroyed && typeof $.fn.owlCarousel === 'function') {
              $('.featured-carousel').owlCarousel({
                loop: true,
                autoplay: true,
                margin: 30,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                dots: true,
                autoplayHoverPause: false,
                items: 3,
                responsiveClass:true,
                responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
              })
            }
          })
          .catch(err => console.error('Failed to load Owl Carousel plugin:', err))
    
        // Cleanup on unmount
        return () => {
          destroyed = true
          try {
            const $el = $('.featured-carousel')
            if ($el.data('owl.carousel')) {
              $el.trigger('destroy.owl.carousel')
            }
          } catch {}
        }
    }, [])

    return (
        <section className="container mx-auto">
            <div className="row">
            <div className="col-md-12">
                <h2 className="heading-section  mb-3 pb-md-4">Nouvelles</h2>
            </div>
            <div className="bg-light">
                <div className="featured-carousel owl-carousel">
                <div className="item">
                    <div className="blog-entry">
                    <a
                        href="#"
                        className="block-20 d-flex align-items-start"
                    >
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading fs-5">
                        <a href="#"
                            >Finance And Legal Working Streams Occur Throughout</a
                        >
                        </h3>
                        <p className="fs-6">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary"
                            >Read More
                            <span className="ion-ios-arrow-round-forward"></span
                            ></a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat"
                            ><span className="ion-ios-chatboxes"></span> 3</a
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="blog-entry">
                    <a href="#" className="block-20 d-flex align-items-start">
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading">
                        <a href="#">Finance And Legal Working Streams Occur Throughout</a>
                        </h3>
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary">Read More
                            <span className="ion-ios-arrow-round-forward"></span>
                            </a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat">
                                <span className="ion-ios-chatboxes"></span> 3
                            </a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="blog-entry">
                    <a href="#" className="block-20 d-flex align-items-start">
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading">
                        <a href="#" >Finance And Legal Working Streams Occur Throughout</a>
                        </h3>
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary">Read More
                            <span className="ion-ios-arrow-round-forward"></span
                            ></a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat"
                            ><span className="ion-ios-chatboxes"></span> 3</a
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="blog-entry">
                    <a
                        href="#"
                        className="block-20 d-flex align-items-start"
                    >
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading">
                        <a href="#"
                            >Finance And Legal Working Streams Occur Throughout</a
                        >
                        </h3>
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary"
                            >Read More
                            <span className="ion-ios-arrow-round-forward"></span
                            ></a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat"
                            ><span className="ion-ios-chatboxes"></span> 3</a
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="blog-entry">
                    <a
                        href="#"
                        className="block-20 d-flex align-items-start"
                    >
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading">
                        <a href="#"
                            >Finance And Legal Working Streams Occur Throughout</a
                        >
                        </h3>
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary"
                            >Read More
                            <span className="ion-ios-arrow-round-forward"></span
                            ></a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat"
                            ><span className="ion-ios-chatboxes"></span> 3</a
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="item">
                    <div className="blog-entry">
                    <a
                        href="#"
                        className="block-20 d-flex align-items-start"
                    >
                        <div className="meta-date text-center p-2">
                        <span className="day">26</span>
                        <span className="mos">Nov.</span>
                        <span className="yr">2019</span>
                        </div>
                    </a>
                    <div className="text border border-top-0 p-4">
                        <h3 className="heading">
                        <a href="#"
                            >Finance And Legal Working Streams Occur Throughout</a
                        >
                        </h3>
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                        </p>
                        <div className="d-flex align-items-center mt-4">
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary"
                            >Read More
                            <span className="ion-ios-arrow-round-forward"></span
                            ></a>
                        </p>
                        <p className="ml-auto meta2 mb-0">
                            <a href="#" className="mr-2">Admin</a>
                            <a href="#" className="meta-chat"
                            ><span className="ion-ios-chatboxes"></span> 3</a
                            >
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default PostSlider