import { Card } from 'primereact/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Certification() {

   
    return (
        <div className='container mt-4'>

<section className='section'>
  <div className='project-container row'>
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card  className="card" style={{backgroundColor :"#635985"}} >
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        DevOps, Cloud, and Agile Foundations
      

        </div>
      
          <a href="https://coursera.org/share/cd94c1087e2eb117d24503ae94ca9e3b" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
      </Card>
    </div>
  
    <div className='project-card col-12 col-md-5 mb-4'>
      <Card className="card" style={{backgroundColor :"#635985"}}>
        <div className='project-title card-title h5' style={{textAlign: "center" , color:"white"}}>
        Python Functions, Files, and Dictionaries
        </div>
        <a href="https://coursera.org/share/66a0acdbc2a82427c7751655363f2cf5" className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>

        
      </Card>
    </div>
  </div>
</section>


        </div>
    )
}

