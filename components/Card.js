import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Card.module.css'
import Link from "next/link";

const Card4 = ({title, image, page, overview, link, id}) => {
    return (
        <div className={styles.card}>
            <a href={`${link}/${id}`}>
            <img src={image} alt={title} className={styles.image}/>
            <div className={styles.info}>
                <h4>{title}</h4>
                <span>{overview}</span>
                {/* <img src={image}/> */}
            </div>
            </a>
        </div>
    //     <Card style={{ width: '400px', height: '400px', margin : '5px' }}>
    //     <Card.Img variant="top" src={image} />
    //     <Card.Body>
    //       <Card.Title>{title}</Card.Title>
    //       <Card.Text>
    //         {overview}
    //       </Card.Text>
    //       <Button variant="primary">View Page</Button>
    //     </Card.Body>
    //   </Card>
    )
}

// import { Card, Col, Row, Button, Text } from "@nextui-org/react";


// const Card4 = ({title, image, page, overview}) => (
//   <Card css={{ w: "300px", h: "400px" }}>
//     <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
//       <Col>
//         {/* <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
//           New
//         </Text> */}
//         <Text h3 color="black">
//           {title}
//         </Text>
//       </Col>
//     </Card.Header>
//     <Card.Body css={{ p: 0 }}>
//       <Card.Image
//         src={image}
//         width="100%"
//         height="100%"
//         objectFit="cover"
//         alt="Card example background"
//       />
//     </Card.Body>
//     <Card.Footer
//       isBlurred
//       css={{
//         position: "absolute",
//         bgBlur: "#ffffff66",
//         borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
//         bottom: 0,
//         zIndex: 1,
//       }}
//     >
//       <Row>
//         <Col>
//           {/* <Text color="#000" size={12}>
//             Available soon.
//           </Text> */}
//           <Text color="#000" size={14}>
//             {/* Get notified. */}
//             {overview}
//           </Text>
//         </Col>
//         <Col>
//           <Row justify="flex-end">
//             <Button flat auto rounded color="secondary">
//               <Text
//                 css={{ color: "inherit" }}
//                 size={12}
//                 weight="bold"
//                 transform="uppercase"
//               >
//                 Notify Me
//               </Text>
//             </Button>
//           </Row>
//         </Col>
//       </Row>
//     </Card.Footer>
//   </Card>
// );

export default Card4;