import React from "react";
import PageHeader from "src/components/common/page-hader";

const Role = () => {
  return (
    <div>
      <PageHeader
        pagetitle="List of Roles"
        func={() => {
          console.log("I am clicked");
        }}
        buttomtitle="Create New Role"
      />
    </div>
  );
};

export default Role;
