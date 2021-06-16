
function Gato(props) {
    const gatillo= props.gatos.razas.map((bichejo, index)=>{
        return (
            <Tarjeta 
            raza={bichejo.raza}
            imagen={bichejo.imagen}                           
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
        <div key="gatitos" className="gatillo">{gatillo}
        </div>
        </>
    );
    
  }
export default Gato;