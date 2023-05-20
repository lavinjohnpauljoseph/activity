import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactDOM from 'react-dom';

// Header component
const Header = () => {
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
  
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
          </ul>
  
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
  
          <div className="dropdown text-end">
            <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="32" height="32" />
            </a>
            <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a className="dropdown-item" href="#">New project...</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero component
const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="../1.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
          <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PricingCard component
const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
          <h4 className="my-0 fw-normal">{title}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">{price}<small className="text-muted fw-light">/mo</small></h1>
          <ul className="list-unstyled mt-3 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button type="button" className="w-100 btn btn-lg btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

// Pricing component
const Pricing = () => {
  const pricingData = [
    {
      title: "Free",
      price: "$0",
      features: ["10 users included", "2 GB of storage", "Email support", "Help center access"],
      buttonText: "Sign up for free"
    },
    {
      title: "Pro",
      price: "$15",
      features: ["20 users included", "10 GB of storage", "Priority email support", "Help center access"],
      buttonText: "Get started"
    },
    {
      title: "Enterprise",
      price: "$29",
      features: ["30 users included", "15 GB of storage", "Phone and email support", "Help center access"],
      buttonText: "Contact us"
    }
  ];

  return (
    <div className="container">
      <main>
        <div className="row">
          <div className="col">
            <hr />
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
              <h1 className="display-4 fw-normal">Pricing</h1>
              <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {pricingData.map((item, index) => (
            <PricingCard
              key={index}
              title={item.title}
              price={item.price}
              features={item.features}
              buttonText={item.buttonText}
            />
          ))}
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>

        <div className="table-responsive">
          <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: '34%' }}></th>
              <th style={{ width: '22%' }}>Free</th>
              <th style={{ width: '22%' }}>Pro</th>
              <th style={{ width: '22%' }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-start">Public</th>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Private</th>
              <td></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="row" className="text-start">Permissions</th>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Sharing</th>
              <td></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Unlimited members</th>
              <td></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
            <tr>
              <th scope="row" className="text-start">Extra security</th>
              <td></td>
              <td></td>
              <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"></use></svg></td>
            </tr>
          </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pricing />
      <script src="bs/js/bootstrap.bundle.js"></script>
    </div>
  );
};

export default App;
