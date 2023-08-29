import Header from '../../components/Header';
import Brand from '../../components/BrandLogo';
import Footer from '../../components/Footer';
import {Col,Container, Row, Image} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json";

const post = ({data}) => {
  // console.log(data);
  return (
    <div>
<Header/>   

<div className='grid grid-cols-3 gap-5 w-full'>
{
data.map((post)=>{
return (
<>
<Container fluid key={post.id} className="success_post" style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
</Container>
<Brand/>
<Container className="pt-4">
<Row>
<Col className="pri_cat"><p className='bogle-bold fs-3'>MSME SuperPower:</p></Col>
<Col className="pri_ico"><Image src={post['acf']['primary_category_icon']['url']} className="primary_cat" alt={post['title']['rendered']}/></Col>
</Row>
</Container>
<Container className="text-center mx-auto">
<h1 className="fs-2 bogle-medium walmart-default">{post['title']['rendered']}</h1>
<Image src={post['acf']['author_profile.url']} alt="Walmart Vriddhi"/>
<h3 className="fs-2 bogle-medium">{post['acf']['author_name']}</h3>
<p className="fs-5">{post['acf']['author_designation']}</p>
</Container>               
<Container>
<Row>
        <Col sm={1}><Image src="/images/commas.png" alt="Walmart Vriddhi"/></Col>
        <Col sm={10}><div dangerouslySetInnerHTML={{__html:post['acf']['short_descriptions']}} className="fs-4"></div></Col>
        <Col sm={1} className="d-flex align-items-end "><Image src="/images/commas_1.png" alt="Walmart Vriddhi"/></Col>
      </Row>
</Container>

<Container className="wbg-main" fluid>
<Container>
<Row>
<Col sm={1}><Image src="/images/commas_2.png" alt="Walmart Vriddhi"/></Col>
<p className="text-white fs-3 bogle-medium">{post['acf']['heading_1']}</p>
</Row>

<Row>
        <Col><div dangerouslySetInnerHTML={{__html:post['acf']['cloumn_1_heading_1']}} className="text-white fs-5 bogle-medium"></div></Col>
        <Col><div dangerouslySetInnerHTML={{__html:post['acf']['cloumn_2_heading_1']}} className="text-white fs-5 bogle-medium"></div></Col>
        <Col><div dangerouslySetInnerHTML={{__html:post['acf']['cloumn_3_heading_1']}}  className="text-white fs-5 bogle-medium"></div></Col>
      </Row>

<Container className="wbg-white">
<Row>
<Col><div dangerouslySetInnerHTML={{__html:post['acf']['descheading_2']}} className=" fs-5 bogle-medium p-3"></div></Col>
</Row>
<Row className="wbg_grey m-3">
<Col><div dangerouslySetInnerHTML={{__html:post['acf']['paragraph_heading']}} className=" fs-5 bogle-medium p-3 walmart-default"></div></Col>
</Row> 
<Row className="p-3">
        <Col><Image src={post['acf']['product_image_left']['url']} alt="Walmart Vriddhi"/></Col>
        <Col><Image src={post['acf']['product_image_right']['url']} alt="Walmart Vriddhi"/></Col>
        
</Row>
<Row className="p-3">
<div dangerouslySetInnerHTML={{__html:post['acf']['description_below_images']}} className="fs-4 bogle-medium walmart-default"></div> 
</Row>
<Row className="p-3">
<div dangerouslySetInnerHTML={{__html:post['acf']['paragraph_end']}} className="fs-4 bogle-medium"></div> 
</Row>
  </Container>      
  
      
      
      </Container>


</Container>

<Footer/>


</>







)



})}

</div>
</div>
  )
}

export default post




export async function getServerSideProps(context){
    const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
    }