
function Perro(props) {
        const perrillo= props.perros.razas.map((chucho, index)=>{
            return (
                <Tarjeta 
                raza={chucho.raza}
                imagen={chucho.imagen}                           
                />
            );
    
        })
    
        function Tarjeta(props){
            return(
                <>
                <div key={props.index} className="card">                
                <h5>{props.raza}</h5>
                <img src={props.imagen} alt={props.raza}/>
                </div>
                </>
            )
        }
    
        return (
            <>
            <div key="perross" className="perrillo">{perrillo}
            </div>
            </>
        );
        
      }
  export default Perro;