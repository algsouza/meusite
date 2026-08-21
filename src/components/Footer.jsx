import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>André Pizza © {new Date().getFullYear()}</span>
        <span>Editor de Vídeo · Filmmaker</span>
      </div>
    </footer>
  )
}

export default Footer
