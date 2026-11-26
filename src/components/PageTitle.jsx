import { Link } from "react-router-dom";

const PageTitle = ({ title, description }) => {
  return (
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="heading-title">{title}</h1>
              {description && <p className="mb-0">{description}</p>}
            </div>
          </div>
        </div>
      </div>

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <div className="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="current" aria-current="page">
              {title}
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default PageTitle;