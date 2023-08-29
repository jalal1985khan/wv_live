import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";
import configData from "../config.json";


export default function App() {


    const [loading, setLoading] = useState(false);

    const typeList = [
        { name: "Manufacturing" },
        { name: "Trading" },
        { name: "Services" }
    ];

    const handleFromTypes = (e) => {
        const type = typeList.find(
            (type) => type.name === e.target.value
        );
        setFromTypes(type.name);
    };

    const sectorList = [
        { name: "Manufacturing" },
        { name: "Trading" },
        { name: "Services" }
    ];

    const handleFromSectors = (e) => {
        const sector = sectorList.find(
            (sector) => sector.name === e.target.value
        );
        setFromSectors(sector.name);
    };

    // busness type function end here

    // state wise city function start here 
    const addressFromik = useFormik({
        initialValues: {
            country: "India",
            state: null,
            city: null
        },

    });
    const countries = csc.getAllCountries();
    const updatedCountries = countries.map((country) => ({
        label: country.name,
        value: country.id,
        ...country
    }));
    const updatedStates = (countryId) =>
        csc
            .getStatesOfCountry('101')
            .map((state) => ({ label: state.name, value: state.id, ...state }));
    const updatedCities = (stateId) =>
        csc
            .getCitiesOfState(stateId)
            .map((city) => ({ label: city.name, value: city.id, ...city }));
    const { values, setFieldValue, setValues } = addressFromik;
    useEffect(() => { }, [values]);
    // state wise city function end here

    const [post, setPost] = React.useState(null);
    const [yourBusiness, setBusiness] = React.useState(null);
    const [yourType, setFromTypes] = React.useState(null);
    const [yourName, setName] = React.useState(null);
    const [yourSector, setFromSectors] = React.useState(null);
    const [yourPhone, setPhone] = React.useState(null);
    const [yourEmail, setEmail] = React.useState(null);
    const [yourState, setState] = React.useState(null);
    const [yourCity, setCity] = React.useState(null);

    const router = useRouter();
    const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
    const query = router.query;


    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();

    };


    function createPost() {

        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/23770/feedback`,
            {
                'your-business': { yourBusiness },
                'business-type': { yourType },
                'your-name': { yourName },
                'business-sector': { yourSector },
                'state': { yourState },
                'city': { yourCity },
                'your-phone': { yourPhone },
                'your-email': { yourEmail },
                'utm_source': query.utm_source,
                'utm_medium': query.utm_medium,
                'utm_campaign': query.utm_campaign,
                'utm_id': query.utm_id

            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
            .then((response) => {
                setPost(response.data.message);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);

                }

                console.log(response.data)
            });


    }

    return (
        <>
            <Header />
           
            <Container className="reg-page p-0 " fluid >
                <p className="fs-4  text-center pt-5">Fill the form to be a part of the Walmart Vriddhi program and unlock your business growth!</p>
                <Container className="p-4 px-4 reg-wid">
                    <Row>
                    <Col className="wbg-white d-sm-none" sm={5}>
                            {/* <BackgroundImage
                                src='./images/registration_banner.png'
                                width="100%"
                                height="100%"
                                background='no-repeat'
                                background-size='cover'
                                isResponsive
                                className="banner-img d-flex align-items-end"
                                lazyLoad
                            /> */}

                        </Col>
                        <Col className="wbg-white p-4" sm={7} xs={12}>
                            <h3 className="text-center">Register</h3>
                            <form
                                onSubmit={handleSubmit}
                                style={{ margin: '20px' }}>

                                <div className="mb-3" >
                                    <label className="form-label"><span className="errors">*</span>Business Name:</label>
                                    <input
                                        //required
                                        type='text'
                                        className="form-control"
                                        id="yourBusiness"
                                        name='yourBusiness'
                                        placeholder="India Pvt Ltd"
                                        value={yourBusiness}
                                        onChange={event => setBusiness(event.target.value)}
                                    />


                                </div>

                                <label className="form-label"><span className="errors">*</span>Business Type:</label>

                                <select
                                    //required
                                    className="form-select"
                                    aria-label="Default select example"
                                    id="yourType"
                                    name="yourType"
                                    value={yourType}
                                    onChange={(e) => handleFromTypes(e)}>
                                    <option value="">Select Business Type</option>
                                    {typeList.map((type, key) => (
                                        <option key={key} title={type.code} value={type.name}>
                                            {type.name}
                                        </option>
                                    ))}

                                </select>

                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourName" className="form-label"><span className="errors">*</span>Your Name:</label>
                                    <input
                                        //required
                                        type='text'
                                        className="form-control"
                                        id="yourName"
                                        name='yourName'
                                        placeholder="Ravi Kumar"
                                        value={yourName}
                                        onChange={event => setName(event.target.value)}
                                    />

                                </div>

                                <label className="form-label"><span className="errors">*</span>Business Sector:</label>
                                <select
                                    //required
                                    className="form-select"
                                    aria-label="Default select example"
                                    name='yourSector'
                                    value={yourSector}
                                    //onChange={event => setSector(event.target.value)}
                                    onChange={(e) => handleFromSectors(e)}>
                                    <option value="" selected>Select Business Sector</option>
                                    {sectorList.map((sector, key) => (
                                        <option key={key} title={sector.code} value={sector.name}>
                                            {sector.name}
                                        </option>
                                    ))}
                                </select>

                                <label className="form-label"><span className="errors">*</span>State:</label>
                                <Select
                                    //required
                                    id='yourState'
                                    name='yourState'
                                    options={updatedStates(values.country ? values.country.value : null)}
                                    value={values.name}
                                    onChange={(value) => {
                                        setValues({ state: value, city: null }, false);
                                        setState(value.name, 'yourState');
                                    }}

                                />


                                <label className="form-label"><span className="errors">*</span>City:</label>
                                <Select
                                    id='yourCity'
                                    name='yourCity'
                                    options={updatedCities(values.state ? values.state.value : null)}
                                    value={values.city}
                                    onChange={(value) => {
                                        setFieldValue("city", value);
                                        setCity(value.name, 'yourCity');
                                    }}

                                />


                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourPhone" className="form-label"><span className="errors">*</span>Your Phone:</label>
                                    <input
                                        //required
                                        type='tel'
                                        className="form-control"
                                        id="yourPhone"
                                        name='yourPhone'
                                        placeholder="1234567890"
                                        value={yourPhone}
                                        onChange={event => setPhone(event.target.value)}

                                    />


                                </div>

                                <div className="mb-3 mt-3">
                                    <label htmlfor="yourPhone" className="form-label"><span className="errors">*</span>Your Email:</label>
                                    <input
                                        //required
                                        type='email'
                                        className="form-control"
                                        id="yourEmail"
                                        name='yourEmail'
                                        placeholder="test@test.com"
                                        value={yourEmail}
                                        onChange={event => setEmail(event.target.value)}

                                    />


                                </div>
                                <button type='submit' className='btn btn-primary register pb-4' onClick={createPost}>Submit</button>
                                {loading && <h1 class="reg-success mt-4">{post}</h1>}

                            </form>
                        </Col>

                        <Col className="wbg-white m-tm-none" sm={5}>
                            {/* <BackgroundImage
                                src='./images/registration_banner.png'
                                width="100%"
                                height="100%"
                                background='no-repeat'
                                background-size='cover'
                                isResponsive
                                className="banner-img d-flex align-items-end"
                                lazyLoad
                            /> */}

                        </Col>
                    </Row>
                </Container>
            </Container>
            <div>

                <h2>utm_source: {utm_source}</h2>
                <h2>Age: {utm_medium}</h2>
                <h2>Title: {utm_campaign}</h2>
                <h2>Title: {utm_id}</h2>
            </div>

            <Footer />
        </>
    );
}