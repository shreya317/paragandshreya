class RsvpController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  def show
    name = params.fetch('name')
    zip  = params.fetch('zip')
    guest = Guest.where(full_name: name).where(zip: zip)
    if guest.count == 0
      # TODO handle errors
    end
    if guest.count == 1
      family = Family.find(guest.first.family_id)
      guests = family.guests
    end

    if guest.count > 1
      # TODO show table of options
    end

    events = Event.all
    @events_hash = {}
    events.map do |event|
      @events_hash[event.id] = event.event_name
    end

    @guest_data = guests.map do |guest|
      rsvps = Rsvp.where(guest_id: guest.id)
      {
        "id" => guest.id,
        "full_name" => guest.full_name,
        "email" => guest.email,
        "rsvps" => rsvps
      }
    end
  end

  def update
    rsvp_hash = params.clone
    rsvp_hash.delete('controller') && rsvp_hash.delete('action')

    rsvps_to_update = rsvp_hash.keys

    rsvps_to_update.each do |rsvp_id|
      rsvp = Rsvp.find(rsvp_id)
      rsvp.status = rsvp_hash[rsvp_id]
      rsvp.save!
    end
  end
end
