json.extract! review, :id, :listing_id, :guest_id, :overall_rating, :body, :cleanliness, :accuracy, :communication, :location, :check_in, :value

json.created_at_year review.created_at.year
json.created_at_month review.created_at.month