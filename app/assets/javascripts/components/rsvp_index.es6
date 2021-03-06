const RsvpIndex = React.createClass({
  renderGuestNotFound() {
    let guestNotFound = this.props.no_guest ? (
      <div className="not_found">
        <h5>Name or Zip Code not found.</h5>
        <h5>Please try again or contact Shreya and Parag.</h5>
      </div>
    ) : (
      null
    )
    return guestNotFound
  },

  render() {
    return (
      <div>
        <a id="tothetop"></a>
        <div className="sign-in">
          <a id="to-next-div"></a>
          <div className="row">
            {this.renderGuestNotFound()}
            <h1>R.S.V.P.</h1>
            <p>KINDLY RESPOND BY May 22, 2016.</p>
            <form action='/rsvp/user' method='get'>
              <input ref='name' name='name' type='text' placeholder='First and Last Name' />
              <input ref='zip' name='zip' type='text' placeholder='ZIP Code from invitation' />
              <input name="commit" type="submit" value="Next" className="button tiny"/>
            </form>
          </div>
        </div>
        <div className="rsvp"></div>
      </div>
    )
  }
})
