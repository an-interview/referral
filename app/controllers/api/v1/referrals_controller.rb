class Api::V1::ReferralsController < ApplicationController
  before_action :authenticate_user!, except: [:welcome]

  def welcome; end

  def index
  end
end
