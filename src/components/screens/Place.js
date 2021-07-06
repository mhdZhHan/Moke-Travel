import React, { Fragment, useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Place() {
    const [place, setPlace] = useState([]);
    const [image, setImage] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
            .then(function (response) {
                setPlace(response.data.data)
                setImage(response.data.data.gallery)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]);
    const renderGallery = () => {
        return image.map((img) => (
            <Image key={img.id} src={img.image} alt="aaa" />
        ));
    };
    return (
        <Fragment>
            <Helmet>
                <title>{`Moke Travel | ${place.name}`}</title>
            </Helmet>
            <DeatilContainer>
                <Heading>{place.name}</Heading>
                <Info>
                    <Tag>{place.category_name}</Tag>
                    <LocationPlace src={require("../../assets/images/place.svg").default} alt="location" />
                    <LocationName>{place.location}</LocationName>
                </Info>
                <PlaceImages>
                    <LeftImage src={place.image} alt="" />
                    <RightImages>
                        {renderGallery()}
                    </RightImages>
                </PlaceImages>
                <PlaceDetails>
                    <Title>Place Details</Title>
                    <Paragraph>
                        {place.description}
                    </Paragraph>
                </PlaceDetails>
            </DeatilContainer>
        </Fragment>
    );
};
const DeatilContainer = styled.div`
    width: 100%;
    padding: 50px 120px;
    @media all and (max-width:870px) {
        padding: 50px 60px;
    }
    @media all and (max-width:640px) {
        padding: 50px 20;
    }
    @media all and (max-width:360px) {
        padding: 50px 20px;
    }
`;
const Heading = styled.h2`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 15px;
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;
const Tag = styled.span`
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid #5c5c5c;
    border-radius: 15px;
    margin-right: 10px;
    color: #5c5c5c;
`;
const LocationPlace = styled.img`
    display: block;
    margin-right: 4px;
`;
const LocationName = styled.span`
    font-size: 14px;
    color: #5c5c5c;
`;
const PlaceImages = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    margin-bottom: 20px;
    width: 100%;
    @media all and (max-width:870px) {
        display: block;
    }
`;
const LeftImage = styled.img`
    display: block;
    width: 400px;
    margin-right: 20px;
    border-top-left-radius: 10px;
    @media all and (max-width:870px) {
        width: 100%;
        margin: 0 auto;
        margin-bottom: 20px;
    }
`;
const RightImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
const Image = styled.img`
    display: block;
    width: 100px;
    height: 150px;
    flex: 1 1 150px;
    &:nth-child(2) {
        border-top-right-radius: 10px;
    }
    &:last-child {
        border-bottom-right-radius: 10px;
    }
`;
const PlaceDetails = styled.div``;
const Title = styled.h3`
    margin-bottom: 20px;
    font-size: 30px;
`;
const Paragraph = styled.p`
    line-height: 1.5rem;
    color: #5c5c5c;
    font-size: 16px;
`;
export default Place;
