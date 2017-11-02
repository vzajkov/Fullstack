# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171102181809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street", null: false
    t.string "town", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "business_id", null: false
    t.float "lat", null: false
    t.float "lng", null: false
  end

  create_table "businesses", force: :cascade do |t|
    t.float "rating"
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_url", null: false
  end

  create_table "detailed_infos", force: :cascade do |t|
    t.boolean "wifi", null: false
    t.boolean "parking", null: false
    t.boolean "smoking", null: false
    t.boolean "takeout", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "price", null: false
    t.text "sunday_hours", null: false
    t.text "monday_hours", null: false
    t.text "tuesday_hours", null: false
    t.text "wednesday_hours", null: false
    t.text "thursday_hours", null: false
    t.text "friday_hours", null: false
    t.text "saturday_hours", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "body", null: false
    t.integer "author_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
