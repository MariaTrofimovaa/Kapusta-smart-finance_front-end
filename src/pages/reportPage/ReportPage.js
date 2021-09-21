import React from "react";
import CategoriesList from "../../client/CategoriesList/CategoriesList";
import Rechart from "../../client/rechart/Rechart";
import UserCount from "../../client/userCount/UserCount";
import GoBack from "../../shared/components/goBack/GoBack";

const ReportPage = () => {
  return (
    <div>
      <GoBack />
      <UserCount />
      <CategoriesList />
      <Rechart />
    </div>
  );
};

export default ReportPage;
