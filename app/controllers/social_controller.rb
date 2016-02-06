class SocialController < ApplicationController
  def index
    @ig_posts = Instagram.tag_recent_media("ParagAndShreya")
  end
end
