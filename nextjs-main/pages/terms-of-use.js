import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import configData from "../config.json";


const privacy = ({ data }) => {
    return (
        <div>
            <Header />
            <Container fluid>
                {
                    data.map((post, index) => {
                        //console.log(post)
                        return (
                            <>
                                <Container className="wbg-main d-flex justify-content-center align-items-center" style={{ height: 150 }}>
                                    <h2 className="text-white bogle-medium">{post['title']['rendered']}</h2>
                                </Container>
                                <Container>
                                    <div dangerouslySetInnerHTML={{ __html: post['acf']['terms_of_use'] }} className="fs-4" />

                                </Container>
                            </>
                        )


                    })}
            </Container>

            <Footer />
        </div>
    )
}

export default privacy


export async function getServerSideProps(context) {
    //const {id} = context.params;

    const res = await fetch(`${configData.SERVER_URL}pages?_embed&slug=terms-of-use`);
    const data = await res.json();
    return { props: { data } }

}
