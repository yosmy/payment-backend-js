import React, {memo} from "react";
import PropTypes from "prop-types";
import {CardPlaceholder} from "./Card";
import {Container, LoaderList, PrimaryButton, Text} from "@yosmy/ui";

const ListCards = memo(({
    ui, api, criteria
}) => {
    return <LoaderList
        ui={{
            layout: ui.layout,
            empty: () => {
                return <Text>No hay tarjetas aún</Text>;
            },
            loading: () => {
                return <>
                    <CardPlaceholder />
                    <CardPlaceholder />
                    <CardPlaceholder />
                </>
            },
            more: ({onClick}) => {
                return <Container
                    flow="row"
                    align={{
                        main: "center"
                    }}
                >
                    <PrimaryButton
                        margin={{
                            top: 2
                        }}
                        onClick={onClick}
                    >
                        <Text>Mostrar más</Text>
                    </PrimaryButton>
                </Container>
            },
            item: ui.item
        }}
        criteria={{
            query: {
                user: criteria.user
            },
            limit: criteria.limit,
        }}
        onCollect={async (query, skip, limit) => {
            const cards = await api.collectCards(
                null,
                query.user,
                skip,
                limit,
            );

            return {
                items: cards,
            };
        }}
    />
}, (prev, next) => {
    return JSON.stringify(prev.criteria) === JSON.stringify(next.criteria);
});

ListCards.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        item: PropTypes.func.isRequired,
    }).isRequired,
    api: PropTypes.shape({
        collectCards: PropTypes.func.isRequired
    }).isRequired,
    criteria: PropTypes.shape({
        user: PropTypes.string,
        limit: PropTypes.number.isRequired
    }).isRequired,
};

export default ListCards;