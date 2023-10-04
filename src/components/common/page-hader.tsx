interface PageHeaderProps {
  pagetitle: string;
  func: any;
  buttomtitle: string;
}
const PageHeader = ({ pagetitle, func, buttomtitle }: PageHeaderProps) => {
  return (
    <div className="page-header h-20 bg-white rounded-[10px] px-6 flex items-center justify-between">
      <h1 className=" text-primary_text font-bold">{pagetitle}</h1>
      <button
        className="h-10 bg-primary px-4 text-white rounded-[4px]"
        onClick={func}
      >
        {buttomtitle}
      </button>
    </div>
  );
};

export default PageHeader;
