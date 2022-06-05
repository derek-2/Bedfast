class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)

    return nil if @user.nil?
    if @user.is_password?(password)
      @user
    else
      nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password
    @password
  end

  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  has_many :listings,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :Listing

  has_many :bookings,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Booking

  has_many :reviews,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :Review

    has_one_attached :photo

end