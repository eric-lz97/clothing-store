import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

// get keys of an object and gives array combining keys
// get all the keys as hats, seakers, mens etc. and get value from collections object with keys
// which will return array of items
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionName => createSelector(
  [selectCollections],
  collections => collections ? collections[collectionName] : null
)

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
)
