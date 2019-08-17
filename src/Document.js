import React from "react";

const Document = () => {
  return (
    <React.Fragment>
      <div className="ui icon header">
        <i className="pdf file outline icon" />
        No documents are listed for this customer.
      </div>
      <div className="ui primary button">Add Document</div>
    </React.Fragment>
  );
};

export default Document;
