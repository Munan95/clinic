const FaqPageTitle = () => {
    return (
        <div className="page-title">
            <div className="heading">
                <div className="container">
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-lg-8">
                            <h1 className="heading-title">Frequenty Asked Questions</h1>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="breadcrumbs">
                <div className="container">
                    <ol>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li className="current">Faq</li>
                    </ol>
                </div>
            </nav>
        </div>
    )
};

export default FaqPageTitle;