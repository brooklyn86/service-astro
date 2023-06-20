import { query } from "express";
import {
  IFilterQueryDataset,
  IFilterAdapter,
} from "../interfaces/IFilterAdapter";

export class FilterAdapter implements IFilterAdapter {
  filterQueryDataset({
    id,
    hasComments,
    hasImages,
    hasRatings,
    hasPrices,
    hasVariants,
    commentsCount,
    imagesCount,
    ratingsCount,
    variantsCount,
    categoryId,
    orders,
    stock,
    originalPriceMin,
    originalPriceMax,
    averageStar,
    hasCriative,
    hasCriativeFacebok,
    hasCriativeTiktok,
    oneStarCount,
    twoStarCount,
    threeStarCount,
    fourStarCount,
    fiveStarCount,
    totalStar,
    totalStartCount,
    companyId,
    companyfollowers,
    companyRating,
    companyRatingCount,
    companyStoreNumber,
    isWinner,
  }: IFilterQueryDataset) {
    const query = {};
    if (id != undefined) {
      Object.assign(query, { id });
    }
    if (hasComments != undefined) {
      Object.assign(query, { hasComments });
    }
    if (hasImages != undefined) {
      Object.assign(query, { hasImages });
    }
    if (hasRatings != undefined) {
      Object.assign(query, { hasRatings });
    }
    if (hasPrices != undefined) {
      Object.assign(query, { hasPrices });
    }
    if (hasVariants != undefined) {
      Object.assign(query, { hasVariants });
    }
    if (commentsCount != undefined) {
      Object.assign(query, { commentsCount });
    }
    if (imagesCount != undefined) {
      Object.assign(query, { imagesCount });
    }
    if (ratingsCount != undefined) {
      Object.assign(query, { ratingsCount });
    }
    if (variantsCount != undefined) {
      Object.assign(query, { variantsCount });
    }
    if (categoryId != undefined) {
      Object.assign(query, { categoryId });
    }
    if (orders != undefined) {
      Object.assign(query, { orders });
    }
    if (stock != undefined) {
      Object.assign(query, { stock });
    }
    if (originalPriceMin != undefined) {
      Object.assign(query, { originalPriceMin });
    }
    if (originalPriceMax != undefined) {
      Object.assign(query, { originalPriceMax });
    }
    if (averageStar != undefined) {
      Object.assign(query, { averageStar });
    }
    if (hasCriative != undefined) {
      Object.assign(query, { hasCriative });
    }
    if (hasCriativeFacebok != undefined) {
      Object.assign(query, { hasCriativeFacebok });
    }
    if (hasCriativeTiktok != undefined) {
      Object.assign(query, { hasCriativeTiktok });
    }
    if (oneStarCount != undefined) {
      Object.assign(query, { oneStarCount });
    }
    if (twoStarCount != undefined) {
      Object.assign(query, { twoStarCount });
    }
    if (threeStarCount != undefined) {
      Object.assign(query, { threeStarCount });
    }
    if (fourStarCount != undefined) {
      Object.assign(query, { fourStarCount });
    }
    if (fiveStarCount != undefined) {
      Object.assign(query, { fiveStarCount });
    }
    if (totalStar != undefined) {
      Object.assign(query, { totalStar });
    }
    if (totalStartCount != undefined) {
      Object.assign(query, { totalStartCount });
    }
    if (companyId != undefined) {
      Object.assign(query, { companyId });
    }
    if (companyfollowers != undefined) {
      Object.assign(query, { companyfollowers });
    }
    if (companyRating != undefined) {
      Object.assign(query, { companyRating });
    }
    if (companyRatingCount != undefined) {
      Object.assign(query, { companyRatingCount });
    }
    if (companyStoreNumber != undefined) {
      Object.assign(query, { companyStoreNumber });
    }
    if (isWinner != undefined) {
      Object.assign(query, { isWinner });
    }
    return query;
  }
}
