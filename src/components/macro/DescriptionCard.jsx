const DescriptionCard = () => {
  const shadowStyle = {
    transition: 'transform 0.5s ease',
    boxShadow: '2px 6px 12px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    padding: '20px',
    margin: 'auto',
    width: '70%', // Memastikan bagian kanan tetap responsif
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
  };

  return (
    <div className="justify-center w-full" style={{ ...shadowStyle, ...hoverStyle }}>
      <h3 className="font-bold text-color-primary text-2xl mb-[14px]">Description</h3>
      <p>Deskripsi produk Anda di sini...</p>
    </div>
  );
};

export default DescriptionCard;
