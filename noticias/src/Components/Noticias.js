import React from 'react';
import PropTypes from 'prop-types';


const Noticia = ({noticia}) => {

    const   {urlToImage, url, title, description, source} =noticia;
    const imagen = (urlToImage) ?
            <div className="card-image">
            <img className="responsive-img" src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
            </div>
    :null;
    return ( 
        
            <div className="col s12 m8 l4">
                <div className="card large">
                    
                    {imagen}

                    <div className="card-content">
                        <h6 className="left-align ">{title}</h6>
                        <p className="left-align">{description}</p>
                    </div>
                    <div className="card-action">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                        >Noticia completa</a>
                    </div>
                    
                </div>
            </div>
        
     );
}
Noticia.propTypes={
    noticia: PropTypes.object.isRequired
 }
 
export default Noticia;