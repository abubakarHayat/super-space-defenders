function Footer() {
  return (
    <div
      className="bg-white h-screen w-full absolute"
      style={{ marginTop: "-90px" }}
    >
      <div className="h-80v bg-black"></div>
      <div className="h-10v bg-footer flex justify-center items-center">
        <p className="text-base">Copyright &copy; 2023 Super Space Defenders</p>
      </div>
    </div>
  );
}

export default Footer;
