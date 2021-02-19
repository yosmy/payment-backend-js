import React from "react";
import PropTypes from "prop-types";
import {Container, LoaderList, PrimaryButton, Text} from "@yosmy/ui";
import {ChargePlaceholder} from "./Charge";

const ListCharges = ({
    ui, api, criteria
}) => {
    return <LoaderList
        ui={{
            layout: ui.layout,
            empty: () => {
                return <Text>No hay pagos aún</Text>;
            },
            loading: () => {
                return <Container
                    margin={{
                        top: 2
                    }}
                >
                    <ChargePlaceholder />
                    <ChargePlaceholder
                        margin={{
                            top: 1
                        }}
                    />
                    <ChargePlaceholder
                        margin={{
                            top: 1
                        }}
                    />
                </Container>
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
            item: (props) => {
                return <ui.item
                    {...props}
                />
            }
        }}
        criteria={{
            query: {
                user: criteria.user
            },
            limit: criteria.limit,
        }}
        onCollect={async (query, skip, limit) => {
            const charges = await api.collectCharges(
                null,
                query.user,
                null,
                null,
                null,
                skip,
                limit,
            );

            return {
                items: charges,
            }
        }}
    />
};

ListCharges.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        item: PropTypes.func.isRequired
    }).isRequired,
    api: PropTypes.shape({
        collectCharges: PropTypes.func.isRequired
    }).isRequired,
    criteria: PropTypes.shape({
        user: PropTypes.string,
        limit: PropTypes.number.isRequired
    }).isRequired,
};

export default ListCharges;