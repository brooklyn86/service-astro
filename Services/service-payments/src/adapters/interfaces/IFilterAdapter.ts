export interface IFilterQueryDataset {
  id?: string;
  hasComments?: boolean;
  hasImages?: boolean;
  hasRatings?: boolean;
  hasPrices?: boolean;
  hasVariants?: boolean;
  commentsCount?: number;
  imagesCount?: number;
  ratingsCount?: number;
  variantsCount?: number;
  categoryId?: number;
  orders?: number;
  stock?: number;
  originalPriceMin?: number;
  originalPriceMax?: number;
  averageStar?: number;
  hasCriative?: boolean;
  hasCriativeFacebok?: boolean;
  hasCriativeTiktok?: boolean;
  oneStarCount?: number;
  twoStarCount?: number;
  threeStarCount?: number;
  fourStarCount?: number;
  fiveStarCount?: number;
  totalStar?: number;
  totalStartCount?: number;
  companyId?: number;
  companyfollowers?: number;
  companyRating?: number;
  companyRatingCount?: number;
  companyStoreNumber?: number;
  isWinner?: boolean;
}

export interface IFilterAdapter {
  filterQueryDataset: (data: IFilterQueryDataset) => IFilterQueryDataset;
}
