const EventsSearch = React.createClass({
  renderEventList(eventList) {
    const eventListOptions = _.map(eventList, (evnt) => {
      return (
        <option value={evnt.event_name_underscore}>{evnt.event_name}</option>
      )
    })
    return eventListOptions
  },

  renderEventRsvps(eventRsvps, evnt, attending, not_attending, no_reply) {
    if (eventRsvps) {
      return (
        <div className="row">
          <h4>{evnt.event_name}</h4>
          <table className="rsvp-totals">
            <thead>
              <tr>
                <th width="120">YES</th>
                <th width="120">NO</th>
                <th width="120">NO REPLY</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{attending}</td>
                <td>{not_attending}</td>
                <td>{no_reply}</td>
              </tr>
            </tbody>
          </table>
          {this.renderGuestList(eventRsvps)}
        </div>
      )
    }
  },

  renderGuestList(eventRsvps) {
    return (
      <div>
        <h4>Guest List</h4>
        <table className="rsvp-guest-list">
          <thead>
            <tr>
              <th>Status</th>
              <th width="300">Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRsvps(eventRsvps)}
          </tbody>
        </table>
      </div>
    )
  },

  renderRsvps(eventRsvps) {
    const theRsvps = _.map(eventRsvps, (rsvp) => {
      return (
        <tr>
          <td>{rsvp.status}</td>
          <td>{rsvp.first_name} {rsvp.last_name}</td>
          <td>{rsvp.updated_at}</td>
        </tr>
      )
    })
    return theRsvps
  },

  renderFamilyMessages(messages) {
    const theMessages = _.map(messages, (message) => {
      return (
        <tr>
          <td>{this.renderMessageGuests(message.guests)}</td>
          <td>{message.message}</td>
          <td>{message.updated_at}</td>
        </tr>
      )
    })
    return theMessages
  },

  renderMessageGuests(guests) {
    const messageGuests = _.map(guests, (guest) => {
      return (
        <div>
          {guest}
        </div>
      )
    })
    return messageGuests
  },

  render() {
    const eventList = this.props.event_list
    const eventRsvps = this.props.event_rsvps
    const evnt = this.props.evnt
    const attending = this.props.attending
    const notAttending = this.props.not_attending
    const noReply = this.props.no_reply
    const messages = this.props.messages
    return (
      <div className="row">
        <div className="row">
          <form className="event-search "action="/events/search" method="get">
            <div className="row">
              <div className="medium-12 columns">
                <label><h3>View RSVP by Event or Messages</h3></label>
                <select name="event">
                  <option value="--"></option>
                    {this.renderEventList(eventList)}
                    <option value="messages">Messages</option>
                </select>
              </div>
              <input type="submit" value="Search" className="button tiny"/>
            </div>
          </form>
        </div>
        {this.renderEventRsvps(eventRsvps, evnt, attending, notAttending, noReply)}
        <div className="row">
          <table>
            <thead>
              <tr>
                <th width="300">Family</th>
                <th width="500">Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.renderFamilyMessages(messages)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
})
