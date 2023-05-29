export interface IFacebookSearchAds {
  params: IParamsSearch;
}

export interface IParamsSearch {
  search_terms: string;
  ad_type: string;
  ad_reached_countries: string;
}

export interface IFacebookAdapter {
  searchAdsFacebook: (data: IFacebookSearchAds) => Promise<any>;
}
