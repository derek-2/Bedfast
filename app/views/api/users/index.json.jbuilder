json.array! @users do |user|
  json.extract! user, :id, :fname, :lname, :email
end