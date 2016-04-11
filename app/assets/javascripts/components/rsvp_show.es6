const RsvpShow = React.createClass({

  renderEventName(eventId) {
    let events = this.props.events
    return events[eventId].event_name
  },

  renderEventInfo(eventId) {
    let events = this.props.events
    let e = events[eventId]
    return e.date + ", " + e.time + " - " + e.location
  },

  renderGuestData() {
    let guestData = this.props.guest_data
    let rsvpRows = _.map(guestData, (guest) => {
      return (
        <div ref='everything' key={guest.id}>
          <div className="row guest">
            <div className="medium-2 small-12 columns">
              <label className="name"><b>{guest.first_name} {guest.last_name}</b></label>
            </div>
            <div className="medium-10 small-2 columns mobile-headers">
              {this.renderEventHeaders(guest.rsvps)}
            </div>
            <div className="medium-10 small-2 columns mobile-select">
              {this.renderRsvps(guest.rsvps)}
            </div>
          </div>
        </div>
      )
    })
    return rsvpRows
  },

  renderEventHeaders(rsvps) {
    let rsvp_headers = _.map(rsvps, (rsvp) => {
      return (
        <div key={rsvp.id}>
          <div className="medium-2 small-2 column">
            <div className="event-headers">
              <label data-tooltip aria-haspopup="true" className="has-tip" title={this.renderEventInfo(rsvp.event_id)}>{this.renderEventName(rsvp.event_id)}</label>
            </div>
          </div>
        </div> 
      )
    })
    return rsvp_headers
  },

  renderRsvps(rsvps) {
    let rsvp = _.map(rsvps, (rsvp) => {
      return (
        <div key={rsvp.id}>
          <div className="medium-2 small-2 column">
            <select name={rsvp.id} ref='rsvpForm' defaultValue={rsvp.status}>
              <option value="--">--</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      )
    })
    return rsvp
  },

  renderFamilyMessage() {
    let familyMessage= this.props.message
    return (
      <div className="row">
        <p><i className="fi-info"></i>  Hover over event name for details.</p>
        <label className="message">Message for the couple</label>
        <textarea name="message">{familyMessage}</textarea>
      </div> 
    )
  },

  renderEmail() {
    let currentUser = this.props.user
    return (
      <div className="row">
        <label className="email">Enter e-mail address for confirmation</label>
        <input type="text" name="email" placeholder={currentUser.email}/>
      </div>
    )   
  },

  render() {
    return (
      <div className="rsvp-form">
        <a id="tothetop"></a>
        <div className="row">
        <h1>R.S.V.P.</h1>
        <div className="rsvp-greeting">
          <h5>Hello, we're so excited to celebrate with you!</h5>
          <h5>Kindly respond by May 22, 2016.</h5>
        </div>
        <form className="rsvp-form-section" action="/rsvp/update" method="post">
          {this.renderGuestData()}
          {this.renderFamilyMessage()}
          {this.renderEmail()}
          <div className="center-button">
            <input type="submit" value="Submit" className="button tiny"/>
          </div>
        </form>
        </div>
      </div>
    )
  }
})
