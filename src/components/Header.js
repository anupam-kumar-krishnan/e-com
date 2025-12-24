const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">
          🍔 <span className="brand">Food King</span>
        </span>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <i className="fa fa-briefcase icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Swiggy Corporate
          </li>
          <li>
            <i className="fa fa-search icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Search
          </li>
          <li>
            <i className="fa fa-certificate icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Offers
          </li>
          <li>
            <i className="fa fa-life-ring icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Help
          </li>
          <li>
            <i className="fa fa-user-circle icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Sign In
          </li>
          <li>
            <i className="fa fa-shopping-cart icons" aria-hidden="true"></i>
            &nbsp;&nbsp;Carts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
