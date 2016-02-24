const RsvpIndex = React.createClass({
  render() {
    return (
      <div>
        <a id="tothetop"></a>
        <div className="rsvp"></div>

        <div className="sign-in">
          <a id="to-next-div"></a>
          <div className="row">
            <h1>Please sign-in to R.S.V.P.</h1>
            <p>KINDLY RESPOND BY May 22, 2016.</p>
            <form action='/rsvp/user' method='get'>
              <input ref='name' name='name' type='text' placeholder='First and Last Name' />
              <input ref='zip' name='zip' type='text' placeholder='ZIP Code From Envelope' />
              <input name="commit" type="submit" value="Search" className="button tiny"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
})