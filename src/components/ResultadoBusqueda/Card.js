import React from 'react'

function Card({title,imageSource,url,click}) {
    return (
        <div className="card align-items-center" width= "18rem" onClick={click}>
            <img src={imageSource} classname="card-img-top" alt="" width="100" height="100" />
            <div className="card-body">
               <h7 className="card-title">{title}</h7>
            </div>
        </div>
    )
}

export default Card
