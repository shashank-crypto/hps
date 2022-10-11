import Link from 'next/link.js';
import Card from './Card.js';

export const Content = ({title, content, link}) => {

    return (
        <div style={{
            "margin" : "15px 0px",
        }}>
            <h3>{title}</h3><Link href={link}><h5 style={{"cursor" : "pointer"}}>View more</h5></Link>
            <div style={{"display":"flex", "overflowX" : "scroll", "overflowY" : "hidden"}}>
                {
                    content.map((element, index) => {
                        return <Card title={element.title} image={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${element.poster_path}`} overview={element.overview} page={`/${title}/${element.title}`} link={link} id={element.id} key={index}/>
                    })
                }
            </div>
        </div>
    ) 
}