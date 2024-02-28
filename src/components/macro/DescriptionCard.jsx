// eslint-disable-next-line react/prop-types
const DescriptionCard = ({ description }) => {
  const shadowStyle = {
    transition: "transform 0.5s ease",
    boxShadow: "2px 6px 12px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    padding: "20px",
    margin: "auto",
    width: "70%", // Memastikan bagian kanan tetap responsif
  };

  return (
    <div
      className="justify-center w-full hover:-translate-y-2"
      style={{ ...shadowStyle }}
    >
      <h3 className="font-bold text-color-primary md:text-2xl text-lg mb-[14px]">
        Description
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default DescriptionCard;
