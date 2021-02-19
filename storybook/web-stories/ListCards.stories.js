import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";

import ListCards from '../ListCards';
import {Card} from "../Card";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default {
  title: 'ListCards',
  component: ListCards,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <ListCards
            ui={{
                layout: EmptyLayout,
                item: ({last4, ...props}) => {
                    return <Card
                        last4={last4}
                        {...props}
                    />
                }
            }}
            api={{
                collectCards: async (ids, user, skip, limit) => {
                    await delay(3000);

                    switch (skip) {
                        case 0:
                            return [
                                {
                                    id: "1",
                                    user: "user-1",
                                    last4: "1234",
                                    fingerprint: "abcd"
                                },
                                {
                                    id: "2",
                                    user: "user-1",
                                    last4: "5678",
                                    fingerprint: "efgh"
                                },
                            ];
                        case 2:
                            return [
                                {
                                    id: "3",
                                    user: "user-1",
                                    last4: "2345",
                                    fingerprint: "ijkl"
                                },
                                {
                                    id: "4",
                                    user: "user-1",
                                    last4: "6789",
                                    fingerprint: "mnlo"
                                },
                            ];
                        default:
                            return [];
                    }
                },
            }}
            criteria={{
                user: "user-1",
                limit: 2
            }}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

