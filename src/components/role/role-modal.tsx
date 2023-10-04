import React from "react";
import { Modal, SelectChangeEvent } from "@mui/material";
import { CustomInput } from "../common/custom-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { roleSchema } from "src/schema/role-schema";
import { Select, MenuItem } from "@mui/material";
interface RoleModalProps {
  type: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const permission = [
  {
    name: "Home",
    children: ["Testomonials", "Partners"],
  },
  {
    name: "Role Management",
    children: ["Roles", "Users"],
  },
];
const RoleModal = ({ type, open, setOpen }: RoleModalProps) => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(roleSchema),
  });
  const [role, setRole] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof role>) => {
    const {
      target: { value },
    } = event;
    console.log(event);
    setRole(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setValue(
      "permission",
      typeof value === "string" ? value.split(",") : value
    );
  };
  const disabled = [
    "Home",
    "Testimonials",
    "Partners",
    "Role Management",
    "Roles",
    "Users",
  ];
  return (
    <Modal open={open}>
      <div className="w-full h-screen flex items-center font-nunito justify-center">
        <form
          onSubmit={handleSubmit((data) => {
            setOpen(false);
            setRole([]);
            reset();
          })}
          className="px-[25px] py-[30px] flex-col flex gap-7 rounded-md bg-white w-[418px]"
        >
          <h1 className="capitalize font-bold text-black ">{type} New Role</h1>
          <CustomInput
            label="Role"
            id="role"
            register={register}
            errors={errors}
            placeholder="Enter Role"
            type="text"
          />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="permission"
              className="text-[#7F7E83] text-[17px] capitalize"
            >
              Permission
            </label>
            <Select
              onChange={handleChange}
              value={role}
              multiple
              sx={{ height: "48px", marginTop: "8px" }}
              native={false}
              renderValue={(value) => (
                <div className="flex gap-2">
                  {value?.map((value) => (
                    <>
                      {permission?.map(
                        (item) =>
                          item?.children?.includes(value) && (
                            <div className="bg-primary flex text-sm px-1 rounded-sm bg-opacity-25">
                              <p className="font-semibold">{item?.name}</p>:
                              <p className="text-primary_text">{value}</p>
                            </div>
                          )
                      )}
                    </>
                  ))}
                </div>
              )}
              id="permission"
            >
              {disabled?.map((item: string) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
            {errors[`permission`] && (
              <span className="text-red-500 text-sm font-normal">
                {errors[`permission`].message as string}
              </span>
            )}
          </div>
          <div className="w-full flex justify-end gap-5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                setRole([]);
                reset();
              }}
              className="p-2.5  text-primary_text text-opacity-75 rounded-[4px] border font-bold"
            >
              Cancle
            </button>
            <button className=" px-7  text-white bg-primary  rounded-[4px] border font-bold">
              {type === "edit" ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RoleModal;
