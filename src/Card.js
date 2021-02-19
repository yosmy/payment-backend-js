import React from "react";
import PropTypes from "prop-types";
import {LinePlaceholder, Text} from "@yosmy/ui";

const CardLayout = ({
    children, ...props
}) => {
    return <Text
        {...props}
    >
        {children}
    </Text>
};

CardLayout.propTypes = {};

const Card = ({
    last4, ...props
}) => {
    return <CardLayout
        {...props}
    >
        **** **** **** {last4}
    </CardLayout>
};

Card.propTypes = {
    last4: PropTypes.string.isRequired
};

const CardPlaceholder = ({
    ...props
}) => {
    return <CardLayout
        {...props}
    >
        <LinePlaceholder />
    </CardLayout>
};

CardPlaceholder.propTypes = {};

export {
    Card,
    CardPlaceholder
};