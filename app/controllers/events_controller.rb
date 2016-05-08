class EventsController < ApplicationController
  http_basic_authenticate_with name: "shreya", password: "shreyag", except: :index

  def index
  end

  def search
    @event_list = Event.all

    if (params[:event] == "messages")
      family_messages = Family.where.not(message: [nil, ''])
      @family_messages = hydrate_families(family_messages)
    elsif (params[:event])
      @event         = Event.find_by(event_name_underscore: params[:event])
      event_rsvps    = @event.rsvps.order(status: :desc, updated_at: :desc)
      @event_rsvps   = hydrate_rsvps(event_rsvps)
      @attending     = @event.rsvps.where(status: "Yes").length
      @not_attending = @event.rsvps.where(status: "No").length
      @no_reply      = @event.rsvps.where(status: "--").length
    end
  end

  def hydrate_rsvps(event_rsvps)
    event_rsvps.map do |rsvp|
      {
        "status" => rsvp.status,
        "updated_at" => rsvp.updated_at,
        "first_name" => rsvp.guest.first_name,
        "last_name" => rsvp.guest.last_name,
      }
    end
  end

  def hydrate_families(family_messages)
    family_messages.map do |family_message|
      {
        "message" => family_message.message,
        "guests" => family_message.guests.map { |g| "#{g.first_name.capitalize} #{g.last_name.capitalize}" },
        "updated_at" => family_message.updated_at,
      }
    end
  end
end
