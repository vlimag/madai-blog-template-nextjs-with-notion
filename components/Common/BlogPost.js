import React, { Component } from 'react';
import Link from 'next/link';

class BlogPost extends Component {
    render() {
        return (
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Recent News</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog/blog1.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>March 10, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                        </Link>
                                    </h3>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog/blog2.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>March 11, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>I Used The Web For A Day On A 50 MB Budget</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src={require("../../images/blog/blog3.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>Admin</a>
                                                </Link>
                                            </li>
                                            <li>March 12, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Here are the 5 most telling signs of micromanagement</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="learn-more-btn">
                                            Read More <i className="flaticon-add"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
 
                {/* Shape Images */}
                <div className="shape-img2">
                    <img src={require("../../images/shape/shape2.svg")} alt="image" />
                </div>
                <div className="shape-img3">
                    <img src={require("../../images/shape/shape3.png")} alt="image" />
                </div>
                <div className="shape-img4">
                    <img src={require("../../images/shape/shape4.svg")} alt="image" />
                </div>
                <div className="shape-img5">
                    <img src={require("../../images/shape/shape5.svg")} alt="image" />
                </div>
                <div className="shape-img7">
                    <img src={require("../../images/shape/shape3.png")} alt="image" />
                </div>
                <div className="dot-shape1">
                    <img src={require("../../images/shape/dot1.png")} alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src={require("../../images/shape/dot2.png")} alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src={require("../../images/shape/dot3.png")} alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src={require("../../images/shape/dot4.png")} alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src={require("../../images/shape/dot5.png")} alt="image" />
                </div>
                <div className="dot-shape2">
                    <img src={require("../../images/shape/dot6.png")} alt="image" />
                </div>
            </section>
        );
    }
}

export default BlogPost;