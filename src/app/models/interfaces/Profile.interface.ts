
export interface VenueProfile{
    status:number;
    message:string;
    data: Profile;

}

interface Profile{
    description:string;
    discription:string;
    venue_name:string;
    phone_no:string;
    formatted_phone_no:string;
    address:string;
    city:string;
    state:string;
    country:string;
    latitude:string;
    longitude:string;
    followers_count:string;
    rating:string;
    is_follow:string;
    is_rated:string;
    status:string;
    owner_id:string;
    profile_images:string[];
    is_closed:string;
    opening_hours:string;
    venue_status:string;
}