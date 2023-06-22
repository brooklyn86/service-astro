import facebookSDK from "facebook-nodejs-business-sdk";

import {
  IFacebookAdapter,
  IFacebookSearchAds,
} from "../interfaces/IFacebookAdapter";
export class FacebookAdapter implements IFacebookAdapter {
  async searchAdsFacebook({ params }: IFacebookSearchAds) {
    const accessToken = 'EAAJkDvC4gLMBAFOZAi3ZAa1ZCqercVeKngJjZAMG1I8CJpvyr1QdRSIHKBqy04lgJ3d2cxvFnZAbR56dbGxLr5HyRc9jvc5ZAckqKlZBcPjzCZBi0tea7tPWYDLLsvYX4ctNMRWZAFoP7D7UfOyLD52zuNPkNXzsJ3tZAiHOgKsNiRmvc6utX8c9LJbcoovZAjCYjs7DgofLeA53XLDlkD0PWcn';
    const facebookAPI = facebookSDK.FacebookAdsApi.init(accessToken);
    const showDebugingInfo = true; // Setting this to true shows more debugging

    if (showDebugingInfo) {
      facebookAPI.setDebug(true);
    }

    // const params = {
    //   search_terms: "california",
    //   ad_type: "POLITICAL_AND_ISSUE_ADS",
    //   ad_reached_countries: '["US"]',
    // };

    return await facebookAPI.call("GET", ["ads_archive"], params);
  }
}
