import image from "../assets/image-qr-code.png"
export default function Card() {
    return <div className="card py-3 rounded-4">
    <img src={image} className="card-img-top rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-center mb-4 text-wrap"><div>Improve your front-end</div><div>skills by building projects</div></h5>
      <div className="card-text text-center text-wrap"><div>Scan the QR code to visit Frontend</div><div>Mentor and take your coding skills to</div><div>the next level</div></div>
      {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
}