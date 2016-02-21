const RsvpShow = React.createClass({

  renderEventName(eventId) {
    if (eventId === 1) {
      return 'Wedding'
    } else {
      return 'Reception'
    }
  },

  renderGuestData() {
    let guestData = this.props.guest_data
    let rsvpRows = _.map(guestData, (guest) => {
      return (
        <div ref='everything' key={guest.id}>
          <div className="row">
            <div className="large-2 columns">
              {guest.full_name}
            </div>
            <div className="large-10 columns">
              {this.renderRsvps(guest.rsvps)}
            </div>
          </div>
        </div>
      )
    })
    return rsvpRows
  },

  renderRsvps(rsvps) {
    let rsvp = _.map(rsvps, (rsvp) => {
      return (
        <div key={rsvp.id}>
          <div className="large-2 column">
            <div>
              {this.renderEventName(rsvp.event_id)}
            </div>
            <select name={rsvp.id} ref='rsvpForm' defaultValue={rsvp.status}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value={null}></option>
            </select>
          </div>
        </div>
      )
    })
    return rsvp
  },

  render() {
    return (
      <div className="rsvp-form">
        <div className="row">
        <h1>Hello!</h1>
        <form action="/rsvp/update" method="post">
          {this.renderGuestData()}
          <input type="submit" value="Submit" className="button tiny"/>
        </form>
        </div>
      </div>
    )
  }
})
