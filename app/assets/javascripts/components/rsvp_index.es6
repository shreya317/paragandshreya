const RsvpIndex = React.createClass({
  render() {
    return (
      <div>
        <a id="tothetop"></a>

        <div className="sign-in">
          <a id="to-next-div"></a>
          <div className="row">
            <h1>R.S.V.P.</h1>
            <p>KINDLY RESPOND BY May 20, 2016.</p>
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