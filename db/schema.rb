# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160221021156) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "event_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "families", force: :cascade do |t|
    t.string   "family_name", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "guests", force: :cascade do |t|
    t.string   "first_name", null: false
    t.string   "last_name",  null: false
    t.string   "full_name",  null: false
    t.string   "email"
    t.string   "zip",        null: false
    t.integer  "family_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "guests", ["family_id"], name: "index_guests_on_family_id", using: :btree

  create_table "rsvps", force: :cascade do |t|
    t.integer  "guest_id",                  null: false
    t.integer  "event_id",                  null: false
    t.string   "status",     default: "--"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
  end

  add_index "rsvps", ["event_id"], name: "index_rsvps_on_event_id", using: :btree
  add_index "rsvps", ["guest_id"], name: "index_rsvps_on_guest_id", using: :btree

  add_foreign_key "guests", "families"
  add_foreign_key "rsvps", "events"
  add_foreign_key "rsvps", "guests"
end
