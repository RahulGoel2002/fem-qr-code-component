import image from "../assets/image-qr-code.png"
export default function Card() {
    return <div className="card py-3 rounded-4">
    <img src={image} className="card-img-top rounded" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-center mb-4 text-wrap"><div>Meet someone with</div><div>Exceptional Frontend skills</div></h5>
      <div className="card-text text-center text-wrap"><div>Hi! I am Rahul Goel</div><div>Scan the qr to visit my</div><div>portfolio</div></div>
      {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
}