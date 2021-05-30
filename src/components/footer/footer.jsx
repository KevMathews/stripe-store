import './footer.styles.scss';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      {year} © MyStore
    </div>
  )
}

export default Footer;