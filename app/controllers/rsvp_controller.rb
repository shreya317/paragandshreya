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
    elsif guest.count == 1
      guests = get_guests_for_family(guest)
    else
      # TODO show table of options for multiple guests
    end

    @events_hash = make_events_hash
    @guest_data = hydrate_guest_data(guests)
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

  private

  def make_events_hash
    events = Event.all
    events_hash = {}
    events.map { |event| events_hash[event.id] = event.event_name }
    return events_hash
  end

  def hydrate_guest_data(guests)
    guests.map do |guest|
      rsvps = Rsvp.where(guest_id: guest.id)
      {
        "id" => guest.id,
        "full_name" => guest.full_name,
        "email" => guest.email,
        "rsvps" => rsvps
      }
    end
  end

  def get_guests_for_family(guest)
    family = Family.includes(:guests).find(guest.first.family_id)
    family.guests
  end
end
