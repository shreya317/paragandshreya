class SongrequestsController < ApplicationController
	http_basic_authenticate_with name: "shreya", password: "shreyag", except: :index
	skip_before_filter :verify_authenticity_token, :only => :create

	def list
		@request_list = Song.all.order(vote: :desc)
	end

	def index
		if (params[:search])
			@songs = RSpotify::Track.search(params[:search])
		end
	end

	def create
		song_title = params[:title]
		request = Song.find_by(title: song_title)
		
		if request
			request.update!(vote: request.vote + 1)
		else	
			new_request = Song.create(title: song_title, vote: 1)
			new_request.save!
		end
		flash.now[:request_success] = "Your song request for " + song_title + " has been submitted."
		render action: "index"
	end

end
