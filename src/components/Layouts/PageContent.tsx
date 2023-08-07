import React from "react";

type PageContentProps = {
  children: any;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex">
        <div className="flex">
          {children[0]}
          {/* LHS{children && children[0 as keyof typeof children]} */}
        </div>
        <div className="flex">
          {children[1]}
          {/* RHS{children && children[1 as keyof typeof children]} */}
        </div>
      </div>
    </div>
  );
};
export default PageContent;
