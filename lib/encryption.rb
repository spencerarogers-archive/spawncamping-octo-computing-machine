# http://ruby-doc.org/stdlib-2.1.1/libdoc/openssl/rdoc/OpenSSL/Cipher.html
# The following encryption was not implemented by a security expert!
class Encryption
  class << self
    def key
      ENV['AES_KEY']
    end

    def iv
      ENV['AES_IV']
    end

    def encrypt(data)
      cipher = OpenSSL::Cipher::AES.new(128, :CBC)
      cipher.encrypt

      cipher.key = key
      cipher.iv  = iv

      Base64.encode64(cipher.update(data) + cipher.final)
    end

    def decrypt(data)
      decipher = OpenSSL::Cipher::AES.new(128, :CBC)
      decipher.decrypt
      decipher.key = key
      decipher.iv = iv

      decipher.update(Base64.decode64(data)) + decipher.final
    end
  end
end
