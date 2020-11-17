import React from 'react';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionsOverview />
    </div>
);

export default ShopPage;