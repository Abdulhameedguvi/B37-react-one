import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


 function Card({item}){
    return (
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{item.name}</h5>
            <h6 class="card-price text-center">
                {item.currency}{item.price}<span class="period">/{item.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
           
               {item.features.map((list)=>{
                return (
                    <li className={!list.isEnable ? `text-muted` : ``}>
                        <span className="fa-li">
                           {
                            ! list.isEnable ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faCheck}/>
                           }
                            </span>
                             {list.title}
                    </li>
                );
                

                
               })

               }

            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );


 }

 export default Card;