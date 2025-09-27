import React from 'react'

function PostCard() {
  return (
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
                    <a href="#" className="btn btn-primary"
                        >Read More
                        <span className="ion-ios-arrow-round-forward"></span
                    ></a>
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
  );
}

export default PostCard