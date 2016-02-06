
const NavBar = React.createClass({
  render() {
    return (
      <nav className="top-bar" data-topbar role="navigation">
        {/*Left Nav Sections*/}
        <ul className="title-area">
          <li className="name">
            <h1>
              <a href="/">P&S &nbsp;<i className="fi-heart"></i>&nbsp;{this.props.days} Days</a>
            </h1>
          </li>
          <li className="toggle-topbar">
            <a href="#"><span>Menu <i className="fi-align-justify"></i></span></a>
          </li>
        </ul>
        <section className="top-bar-section">
          {/*Right Nav Section*/}
          <ul className="right">
            <li><a href="/#story">Our Story</a></li>
            <li><a href="/events/index">Events</a></li>
            <li><a href="/weddingparty/index">Wedding Party</a></li>
            <li><a href="/accomodations/index">Accommodations</a></li>
            <li><a href="/rsvp/index">R.S.V.P.</a></li>
            <li><a href="/social/index">Get Social</a></li>
            <li><a href="/gallery/index">Gallery</a></li>
            <li><a href="/contact/index">Contact Us</a></li>
            {/*<li className="has-dropdown">
              <a href="#">More</a>
              <ul className="dropdown">
                <li><a href="/gallery/index">Gallery</a></li>
                <li><a href="/social/index">Get Social</a></li>
              </ul>
            </li>*/}
          </ul>
        </section>
      </nav>
    )
  }
})
