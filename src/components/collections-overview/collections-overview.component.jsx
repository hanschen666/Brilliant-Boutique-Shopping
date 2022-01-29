import React from "react";
import "../collections-overview/collections-overview.styles.scss";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return (
        <PreviewCollection
          key={id}
          {...otherCollectionProps}
        ></PreviewCollection>
      );
    })}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectCollectionForPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
