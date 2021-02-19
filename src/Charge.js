import React from "react";
import PropTypes from "prop-types";
import {Container, LinePlaceholder, Text} from "@yosmy/ui";
import Money from "@yosmy/money";
import {distance as distanceDate, format as formatDate} from "@yosmy/date";

const ChargeLayout = ({
    children, ...props
}) => {
    return <Container
        flow="row"
        {...props}
    >
        {children}
    </Container>
};

ChargeLayout.propTypes = {};

const Charge = ({
    amount, date, ...props
}) => {
    return <ChargeLayout
        {...props}
    >
        <Text>
            {Money.format(amount)}
        </Text>
        <Text
            margin={{
                left: 2
            }}
        >
            {distanceDate(date * 1000)} ({formatDate(date * 1000)})
        </Text>
    </ChargeLayout>
};

Charge.propTypes = {
    amount: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
};

const ChargePlaceholder = ({
    ...props
}) => {
    return <ChargeLayout
        {...props}
    >
        <LinePlaceholder />
        <LinePlaceholder
            margin={{
                left: 1
            }}
        />
    </ChargeLayout>
};

ChargePlaceholder.propTypes = {};

export {
    Charge,
    ChargePlaceholder
};