import { GetFeedResponseInterface } from "./getFeedResponse.interface";

export interface FeedStateInterface {

    isLoding : boolean ,
    error: string | null ,
    data : GetFeedResponseInterface | null
}