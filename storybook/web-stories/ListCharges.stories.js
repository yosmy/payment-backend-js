import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";
import ListCharges from '../ListCharges';
import {Charge} from '../Charge';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  title: 'ListCharges',
  component: ListCharges,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ListCharges
            ui={{
                layout: EmptyLayout,
                item: ({id, amount, date}) => {
                    return <Charge
                        key={id}
                        amount={amount}
                        date={date}
                    />;
                }
            }}
            api={{
                collectCharges: async (ids, user, card, from, to, skip, limit) => {
                    await delay(300);

                    switch (skip) {
                        case 0:
                            return [
                                {
                                    id: 'id-1',
                                    card: 'card-1',
                                    amount: 1000,
                                    date: 1605918389
                                },
                                {
                                    id: 'id-2',
                                    card: 'card-2',
                                    amount: 2000,
                                    date: 1605914389
                                }
                            ];
                        case 2:
                            return [
                                {
                                    id: 'id-3',
                                    card: 'card-1',
                                    amount: 1000,
                                    date: 1605911389
                                }
                            ];
                        default:
                            return [];
                    }
                },
            }}
            criteria={{
                user: null,
                limit: 2
            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

