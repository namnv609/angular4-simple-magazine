class Api::V1::PostsController < ApplicationController
  def index
    render json: {
      posts: Post.all.as_json(except: [:updated_at])
    }
  end
end
