json.extract! item, :id, :quantity, :style, :price, :name, :description, :created_at, :updated_at
json.url item_url(item, format: :json)
