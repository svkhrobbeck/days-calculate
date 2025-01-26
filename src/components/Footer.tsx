const Footer = () => {
  const imgUrl = import.meta.env.VITE_AVATAR_URL!;

  return (
    <footer>
      <a className="link" href={`https://t.me/${import.meta.env.VITE_USERNAME!}`}>
        {imgUrl ? <img src={imgUrl} width={25} height={25} alt="avatar" /> : ""}
        <span>author</span>
      </a>
    </footer>
  );
};

export default Footer;
