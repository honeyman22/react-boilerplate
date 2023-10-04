import React, { useState } from "react";
import PageHeader from "src/components/common/page-hader";
import CommonPageTab from "src/components/common/page-tab";

const Role = () => {
  const [tab, setTab] = useState("List of Role");
  return (
    <div>
      <PageHeader
        pagetitle="List of Roles"
        func={() => {
          console.log("I am clicked");
        }}
        buttomtitle="Create New Role"
      />
      <CommonPageTab
        tablist={["List of Role", "Deleted Role"]}
        setfunc={setTab}
        tab={tab}
      />
    </div>
  );
};

export default Role;
