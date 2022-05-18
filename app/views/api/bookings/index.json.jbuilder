json.array! @bookings.each do |booking|
    json.extract! booking, :id, :guest_id, :listing_id, :check_in_date, :check_out_date, :num_guests, :total_price
end