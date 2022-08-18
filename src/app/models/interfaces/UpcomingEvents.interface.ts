export interface UpcomingEvent{
  status: string;
  message: string;
  data: Event[];
  pagination: Page;
  app_version: Version;
}

export interface Event {
  parent_event_id: string;
  event_id: string;
  event_name: string;
  venue_id: string;
  venue_name: string;
  city: string;
  state: string;
  country: string;
  organised_by: string;
  organiser_name: string;
  organiser_id: string;
  event_age_group: string;
  event_description: string;
  event_view_count: string;
  total_upload_images: string;
  event_pic: string;
  event_ticket_type: string;
  event_fee: string;
  event_tickets: string;
  event_date: string;
  event_end_date: string;
  event_ticket_sold: string;
  friends_going: string;
  event_amount: string;
  event_platform_fee: string;
  event_stripe_fee: string;
  payout_status: string;
  event_remained_days: string;
  date_short: string;
  date_month: string;
  event_start_time: string;
  event_end_time: string;
  venue_latitude: string;
  venue_longitude: string;
  minimum_fee: string;
  maximum_fee: string;
  fav: string;
  remained_seats: string;
  sold_out: string;
  tentative_date: string;
  is_rsvp_event: string;
}

export interface Page {
  offset: string;
}

export interface Version {
  ios: string;
  android: string;
  is_force_update: string;
}

