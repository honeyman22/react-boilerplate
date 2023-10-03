import classNames from "classnames";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface CustomInputProps {
  register: any;
  errors: any;
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  isReadonly?: boolean;
  isCapitalize?: boolean;
  max?: any;
  withTooltip?: boolean;
  toolTip?: string;
}
export const CustomInput = ({
  register,
  errors,
  id,
  label,
  max,
  type,
  placeholder,
  className,
  isReadonly,
  isCapitalize,
  withTooltip,
  toolTip,
}: CustomInputProps) => {
  return (
    <div
      className={classNames(
        "input-wrapper flex gap-1 flex-col text-black",
        className
      )}
    >
      {!withTooltip ? (
        <label htmlFor={id} className="text-[#7F7E83] text-[17px] capitalize">
          {label}
        </label>
      ) : (
        <div className="wrapper flex items-center gap-2">
          <label htmlFor={id} className="text-[#7F7E83] text-[17px] capitalize">
            {label}
          </label>

          {/* <Tooltip label={toolTip} position="right" color="#0C164B">
            <span>
              <BiHelpCircle />
            </span>
          </Tooltip> */}
        </div>
      )}
      {type === "text" && (
        <input
          type="text"
          name={id}
          id={id}
          {...register(id)}
          readOnly={isReadonly}
          className={classNames(
            "h-12  bg-[#F4F4F4] border mt-2 px-2.5 font-semibold rounded-[4px] outline-none border-input-border",
            !isCapitalize && "capitalize"
          )}
        />
      )}
      {type === "email" && (
        <input
          type="email"
          name={id}
          id={id}
          {...register(id)}
          readOnly={isReadonly}
          className="px-2 py-2 mt-2 bg-white border border-input-border"
        />
      )}

      {type === "number" && (
        <input
          type="number"
          name={id}
          id={id}
          {...register(id)}
          readOnly={isReadonly}
          className={classNames(
            "h-12  bg-[#F4F4F4] border px-2.5 mt-2 font-semibold rounded-[4px] outline-none border-input-border",
            !isCapitalize && "capitalize"
          )}
        />
      )}
      {type === "textarea" && (
        <textarea
          type="text"
          name={id}
          id={id}
          rows={6}
          readOnly={isReadonly}
          placeholder={placeholder}
          {...register(id)}
          className={classNames(
            "h-12  bg-[#F4F4F4] border px-2.5 mt-2 font-semibold rounded-[4px] outline-none border-input-border",
            !isCapitalize && "capitalize"
          )}
        />
      )}
      {type === "date" && (
        <input
          type="date"
          name={id}
          max={max}
          id={id}
          rows={6}
          placeholder={placeholder}
          {...register(id)}
          className={classNames(
            "h-12  bg-[#F4F4F4] border px-2.5 mt-2 font-semibold rounded-[4px] outline-none border-input-border",
            !isCapitalize && "capitalize"
          )}
        />
      )}
      {errors[`${id}`] && (
        <span className="text-red-500 text-sm font-normal">
          {errors[`${id}`].message as string}
        </span>
      )}
    </div>
  );
};
export const CustomPasswordInput = ({
  register,
  errors,
  id,
  className,
  label,
}: CustomInputProps) => {
  const [show, setshow] = useState(false);
  return (
    <div
      className={classNames(
        "input-wrapper relative  flex gap-1 flex-col text-black",
        className
      )}
    >
      <label htmlFor={id} className="text-[#7F7E83] text-[17px] capitalize">
        {label}
      </label>

      <input
        type={show ? "text" : "password"}
        name={id}
        id={id}
        {...register(id)}
        className={classNames(
          "h-12 w-full  bg-[#F4F4F4] mt-2 border px-2.5 font-semibold rounded-[4px] outline-none border-input-border"
        )}
      />

      <div className="icon-wrapper absolute right-2 top-14">
        {show && (
          <AiFillEye
            className="cursor-pointer"
            onClick={() => setshow(false)}
          />
        )}
        {!show && (
          <AiFillEyeInvisible
            className="cursor-pointer"
            onClick={() => setshow(true)}
          />
        )}
      </div>

      {errors[`${id}`] && (
        <span className="text-red-500 text-sm font-normal">
          {errors[`${id}`].message as string}
        </span>
      )}
    </div>
  );
};
