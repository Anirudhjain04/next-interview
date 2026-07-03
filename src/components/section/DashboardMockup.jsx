import dashboardPreview from "../../assets/images/dashboard-preview.png";

const DashboardMockup = () => {
  return (
    <>
      <div className="w-full max-w-[820px]">
        <img
          src={dashboardPreview}
          alt="NextInterview Dashboard Preview"
          className="w-full rounded-3xl shadow-2xl"
        />
      </div>
    </>
  );
};

export default DashboardMockup;
