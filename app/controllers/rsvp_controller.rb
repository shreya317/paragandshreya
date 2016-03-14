class RsvpController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
  end

  def show
    name = params.fetch('name').downcase
    zip  = params.fetch('zip')

    guest = Guest.where(full_name: name, zip: zip)

    if guest.empty?
      flash.now[:guest_not_found] = "Name or ZIP Code does not match, please try again."
      render "index"
    elsif guest.count > 1
      # TODO show table of options for multiple guests
    else
      guests = get_guests_for_family(guest)
      @events_hash = make_events_hash
      @guest_data = hydrate_guest_data(guests)
    end
  end

  def update
    message = params.fetch('message')
    rsvp_hash = params.clone
    rsvp_hash.delete('controller') && rsvp_hash.delete('action') && rsvp_hash.delete('message')

    rsvps_to_update = rsvp_hash.keys

    guest_rsvp_id = rsvps_to_update.first
    one_rsvp = Rsvp.find(guest_rsvp_id)
    family_id = Guest.find(one_rsvp.guest_id).family_id
    family = Family.find(family_id)
    family.message = message
    family.save!

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
        "first_name" => guest.first_name,
        "last_name" => guest.last_name,
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
