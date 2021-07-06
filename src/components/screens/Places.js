import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from "axios";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Places() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('https://traveller.talrop.works/api/v1/places/')
            .then(function (response) {
                setPlaces(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    let renderPlaces = () => {
        return places.map((place) => (
            <GalleryItem key={place.id}>
                <Link to={`/place/${place.id}`}>
                    <ItemTop>
                        <Pic src={place.image} alt={place.name} />
                    </ItemTop>
                    <ItemBottom>
                        <Title>{place.name}</Title>
                        <Location>
                            <LocationPlace src={require("../../assets/images/place.svg").default} alt="location" />
                            <LocationName>{place.location}</LocationName>
                        </Location>
                    </ItemBottom>
                </Link>
            </GalleryItem>
        ));
    };
    return (
        <Fragment>
            <Helmet>
                <title>Moke Travel | Places</title>
            </Helmet>
            <GalleryContainer>
                <Heading>Welcome</Heading>
                <SubHeading>Explore the world around you</SubHeading>
                <GalleryList>
                    {renderPlaces()}
                </GalleryList>
            </GalleryContainer>
        </Fragment>
    );
};

const GalleryContainer = styled.div`
    width: 100%;
    padding: 50px 0;
`;
const Heading = styled.h2`
    font-size: 27px;
    font-weight: 700;
    margin-bottom: 15px;
`;
const SubHeading = styled.h6`
    color: #c5c5c5;
    font-size: 15px;
    margin-bottom: 25px;
`;
const GalleryList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;
const GalleryItem = styled.li`
    flex: 1 1 200px;
`;
const ItemTop = styled.div``;
const Pic = styled.img`
    display: block;
    /* width: 250px; */
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;
const ItemBottom = styled.div`
    margin-left: 10px;
`;
const Title = styled.h5`
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 14px;
    margin-top: 10px;
`;
const Location = styled.div`
    display: flex;
    align-items: center;
`;
const LocationPlace = styled.img`
    margin-right: 10px;
`;
const LocationName = styled.span`
    font-size: 13px;
    color: #756f6f;
`;
export default Places;
