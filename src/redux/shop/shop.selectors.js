import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => {
        console.log("33333333333333333333333333333333333333333333333333");
        return shop.collections;
    }
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => {
        console.log("sdfasdsfsadfasffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
        console.log(shop.collections);
        return !!shop.collections;
    }
);