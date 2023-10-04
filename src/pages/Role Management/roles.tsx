import React, { useState } from "react";
import { MdDelete, MdModeEdit, MdRestore } from "react-icons/md";
import DeletePopUp from "src/components/common/delete-popup";
import { styled } from "@mui/material/styles";
import PageHeader from "src/components/common/page-hader";
import CommonPageTab from "src/components/common/page-tab";
import TableHeader from "src/components/common/table-header";
import RoleModal from "src/components/role/role-modal";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FF7500",
    color: "#ffffff",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    "&::before": {
      content: '""',
      position: "absolute",
      top: "29px", // Adjust the position of the arrow as needed
      left: "50%",
      transform: "translateX(-50%)",
      border: "7px solid transparent",
      borderTopColor: "#FF7500", // Use the background color for the arrow
    },
  },
}));
const Role = () => {
  const [tab, setTab] = useState("List of Role");
  const [opencreate, setOpenCreate] = useState(false);
  const [opendelete, setOpenDelete] = useState(false);
  const [openedit, setOpenEdit] = useState(false);
  return (
    <>
      <PageHeader
        pagetitle="List of Roles"
        func={() => {
          setOpenCreate(true);
        }}
        buttomtitle="Create New Role"
      />
      <CommonPageTab
        tablist={["List of Role", "Deleted Role"]}
        setfunc={setTab}
        tab={tab}
      />
      <table className="w-full mt-6">
        <thead>
          <TableHeader
            headerdata={[
              "SN",
              "Username",
              "Role",
              "Created By",
              "Updated By",
              "Action",
            ]}
          />
        </thead>
        <tbody>
          <tr className="h-14 bg-white text-left ">
            <td className="pl-5">1</td>
            <td className="pl-5">Nishan Bhattarai</td>
            <td className="pl-5">Admin</td>
            <td className="pl-5">AITC Admin</td>
            <td className="pl-5">AITC Admin</td>
            <td className="pl-5">
              <div className="w-full flex justify-center gap-5">
                <LightTooltip title="Edit" placement="top">
                  <button>
                    <MdModeEdit
                      fill={"#52BD94"}
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenEdit(true);
                      }}
                    />
                  </button>
                </LightTooltip>
                <LightTooltip title="Delete" placement="top">
                  <button>
                    <MdDelete
                      fill={"#D14343"}
                      size={20}
                      className="cursor-pointer"
                      onClick={() => {
                        setOpenDelete(true);
                      }}
                    />
                  </button>
                </LightTooltip>
                {tab === "Deleted Role" && (
                  <LightTooltip title="Restore" placement="top">
                    <button>
                      <MdRestore
                        size={20}
                        className="cursor-pointer text-primary_text"
                        onClick={() => {
                          setOpenDelete(true);
                        }}
                      />
                    </button>
                  </LightTooltip>
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <DeletePopUp
        open={opendelete}
        setOpen={setOpenDelete}
        deletefunction={() => {
          console.log("I am delete button");
        }}
        message="Are you Sure that you want to delete this services?"
      />
      <RoleModal open={opencreate} setOpen={setOpenCreate} type="add" />
      <RoleModal open={openedit} setOpen={setOpenEdit} type="edit" />
    </>
  );
};

export default Role;
