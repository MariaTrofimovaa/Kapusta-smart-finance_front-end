import React from "react";
import CategoriesList from "../../client/CategoriesList/CategoriesList";
import Rechart from "../../client/rechart/Rechart";

const ReportPage = () => {
  return (
    <div>
      <CategoriesList />
      <Rechart/>
    </div>
  );
};

export default ReportPage;
