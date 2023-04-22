import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetail() {

  const projets = [
    {
      title: "Ecommerce WebSite",
      description: "PHP - mysql",
      Link:"https://github.com/Bakka08/Ecommerce-WebSite-PHP-Mysql"

    },
    {
      title: "Pokedex Android app",
      description: "java using api",
      Link:"https://github.com/Bakka08/Pokedex-android-app-java-using-api"
    },
    {
      title: "Tic tac toe",
      description: "react",
      Link:"https://vercel-tic-tac-toe-react-app.vercel.app/"
    },
    
  ];

  return (
    <div style={{ paddingTop: '5vh' }}>
      <section className="row justify-content-center" style={{ padding: '10vh 10vh 10vh 10vh' }}>
        {projets.map((projet, index) => (
          <div key={index} className="col-sm-6 col-md-4 mb-4" >
            <div className="card" style={{backgroundColor :"#635985"}}>
              <div className="card-body">
                <h5 className="card-title" style={{textAlign: "center" , color:"white"}}>{projet.title}</h5>
                <p className="card-text" style={{textAlign: "center" , color:"white"}}>{projet.description}</p>
                <a href={projet.Link} className="btn btn-primary" style={{ width: "100%", backgroundColor: "white", textAlign: "center" , color:"#635985"}}>Preview</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default ProjectDetail;
