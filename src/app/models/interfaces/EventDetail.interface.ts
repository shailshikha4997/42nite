export interface Eventdetail{
    age_group:number;
    event_description:string;
    image_url:string;
    schedule_data: Schedule[];
    ticketTypes: Tickets[];
    tr_fee:string;
}

interface Schedule{
    id:string;
    event_date:string;
    event_end_date:string;
    venue_id:string;
    venue_latitude:string;
    venue_longitude:string;
    state:string;
    event_start_time:string;
    event_id:string;
    created_by:string;
    event_end_time:string;
    user_role:string;
    venue_address:string;
    venue_city:string;
    venue_state:string;
    venue_country:string;
    status:string;
    tentative_date:string;
    event_made_by:string;
    name:string;
    event_name:string;
}

interface Tickets{
    ticket_name:string;
    ticket_count:string;
    ticket_fee:string;
    ticket_instructions:string;
    sold_out_id:string;
    ticket_id:string;
    start_date:string;
    end_days:string;
    end_date:string;
    start_time:string;
    end_time:string;
    sold:number;
    available:number;
    scanned:number;
}