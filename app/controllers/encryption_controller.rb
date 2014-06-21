require 'openssl'
require 'base64'
class EncryptionController < ApplicationController
  def create
    @encrypted_data = Encryption.encrypt(params[:data])
  end
end
