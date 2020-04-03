import React from "react";
import { Card } from "./styles";

interface ICard {
}

const CardText = ({ children }) => {
    return (<Card>
        {children}
    </Card>)
}

export default CardText;