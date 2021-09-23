import React from "react";
import Proptypes from 'prop-types';
//styles
import { Wrapper, Image } from './Actor.Styles'

const Actor = ({ name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb' />
        <h3>{name}</h3>
        <p>{character}</p>
    </Wrapper>
);

Actor.propTypes = {
    name: Proptypes.string,
    character: Proptypes.string,
    imageUrl: Proptypes.string
}

export default Actor;
