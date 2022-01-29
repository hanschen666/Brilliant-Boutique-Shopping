import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import "./directory.styles.scss";

const Directory = ({ section }) => {
  return (
    <div className="directory-menu">
      {section.map((i) => (
        <MenuItem
          key={i.id}
          title={i.title}
          imageUrl={i.imageUrl}
          size={i.size}
          linkUrl={i.linkUrl}
        ></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  section: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);
