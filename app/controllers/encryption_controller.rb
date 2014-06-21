class EncryptionController < ApplicationController
  def create
    @encrypted_data = Encryption.encrypt(params[:email])
  end
end
