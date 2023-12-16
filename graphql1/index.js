import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { events, locations, participants, users } from "./data.js";

const typeDefs = `

type User {
 id: Int!
 username: String!
 email: String!
}

type Event {
   id: Int!
   title: String!
   desc: String!
   date: String!
   from: String!
   to: String!
   location_id: Int!
   user_id: Int!
   user:User!
   participants: [Participant!]!
   location: Location!
}

type Participant {
    id: Int!
    user_id: Int!
    event_id: Int!
    user: User!
}

type Location{
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
}

  type Query {
   
    users: [User!]!
    user(id: Int!): User!
    
    events: [Event!]!
    event(id: Int!):Event!

    participants: [Participant!]!
    participant(id: Int!):Participant!

    locations:[Location!]!
    location(id:ID!):Location!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find((user) => user.id === args.id),

    events: () => events,
    event: (parent, args) => events.find((event) => event.id === args.id),

    participants: () => participants,
    participant: (parent, args) =>
      participants.find((participant) => participant.id === args.id),

    locations: () => locations,
    location: (parent, args) =>
      locations.find((location) => location.id == args.id),
  },
  Event: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    participants: (parent) =>
      participants.filter((participant) => participant.event_id === parent.id),
    location: (parent) =>
      locations.find((location) => location.id === parent.location_id),
  },

  Participant: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
