import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { nanoid } from "nanoid";

import { events, locations, participants, users } from "./data.js";

const typeDefs = `

type User {
 id: ID!
 username: String!
 email: String!
}

input CreateUserInput {
  username: String!
  email: String!
}

input UpdateUserInput {
 username: String
 email: String
}

 type DeleteAllOutput {
    count: Int!
  }

type Event {
   id: ID!
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

input CreateEventInput {
  title: String!
  desc: String!
  date: String!
  from: String!
  to: String!
  location_id: Int!
  user_id: Int!
}

input UpdateEventInput {
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: Int
    user_id: Int
}

type Participant {
    id: ID!
    user_id: ID!
    event_id: ID!
    user: User!
}

input CreateParticipantInput {
    user_id: ID!
    event_id: ID!
}

input UpdateParticipantInput {
    user_id: ID
    event_id: ID
}

type Location{
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
}

input CreateLocationInput {
  name: String!
  desc: String!
  lat: Float!
  lng: Float!
}

input UpdateLocationInput {
  name: String
  desc: String
  lat: Float
  lng: Float
}

  type Query {
   
    users: [User!]!
    user(id: ID!): User!
    
    events: [Event!]!
    event(id: ID!):Event!

    participants: [Participant!]!
    participant(id: ID!):Participant!

    locations:[Location!]!
    location(id:ID!):Location!
  }

  type Mutation {
    # USER
    createUser(data:CreateUserInput!): User!
    updateUser(id: ID!, data: UpdateUserInput!):User!
    deleteUser(id: ID!): User!
    deleteAllUsers: DeleteAllOutput!

    # EVENT
    createEvent(data:CreateEventInput!): Event!
    updateEvent(id: ID!, data: UpdateEventInput!): Event!
    deleteEvent(id: ID!):Event!
    deleteAllEvents: DeleteAllOutput!

    # PARTICIPANT
    createParticipant(data:CreateParticipantInput!): Participant!
    updateParticipant(id: ID!, data: UpdateParticipantInput): Participant!
    deleteParticipant(id: ID!): Participant!
    deleteAllParticipants: DeleteAllOutput!

    # LOCATIONS
    createLocation(data:CreateLocationInput!): Location!
    updateLocation(id: ID!, data:UpdateLocationInput): Location!
    deleteLocation(id: ID!): Location!
    deleteAllLocations: DeleteAllOutput!
  }
`;

const resolvers = {
  Mutation: {
    //USER
    createUser: (parent, { data }) => {
      const user = { id: nanoid(), ...data };
      users.push(user);
      return user;
    },
    updateUser: (parent, { id, data }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const updatedUser = (users[userIndex] = { ...users[userIndex], ...data });
      return updatedUser;
    },
    deleteUser: (parent, { id }) => {
      const userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found!");
      }
      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    },
    deleteAllUsers: () => {
      const length = users.length;
      users.splice(0, length);

      return {
        count: length,
      };
    },

    //EVENT
    createEvent: (parent, { data }) => {
      const event = { id: nanoid(), ...data };
      events.push(event);
      return event;
    },
    updateEvent: (parent, { id, data }) => {
      const eventIndex = events.findIndex((event) => event.id === id);
      if (eventIndex === -1) {
        throw new Error("Event not found");
      }
      const updatedEvent = (events[eventIndex] = {
        ...events[eventIndex],
        ...data,
      });
      return updatedEvent;
    },
    deleteEvent: (parent, { id }) => {
      const eventIndex = events.findIndex((event) => event.id === id);
      if (eventIndex === -1) {
        throw new Error("Event not found!");
      }
      const deletedEvent = events[eventIndex];
      events.splice(eventIndex, 1);
      return deletedEvent;
    },
    deleteAllEvents: () => {
      const length = events.length;
      events.splice(0, length);

      return {
        count: length,
      };
    },

    //PARTICIPANT
    createParticipant: (parent, { data }) => {
      const participant = { id: nanoid(), ...data };
      participants.push(participant);
      return participant;
    },
    updateParticipant: (parent, { id, data }) => {
      const participantIndex = participants.findIndex(
        (participant) => participant.id === id
      );
      if (participantIndex === -1) {
        throw new Error("Participant not found");
      }
      const updatedParticipant = (participants[participantIndex] = {
        ...participants[participantIndex],
        ...data,
      });
      return updatedParticipant;
    },
    deleteParticipant: (parent, { id }) => {
      const participantIndex = participants.findIndex(
        (participant) => participant.id === id
      );
      if (participantIndex === -1) {
        throw new Error("Participant not found!");
      }
      const deletedParticipants = participants[participantIndex];
      participants.splice(participantIndex, 1);
      return deletedParticipants;
    },
    deleteAllParticipants: () => {
      const length = participants.length;
      participants.splice(0, length);

      return {
        count: length,
      };
    },

    //LOCATION
    createLocation: (parent, { data }) => {
      const location = { id: nanoid(), ...data };
      locations.push(location);
      return location;
    },
    updateLocation: (parent, { id, data }) => {
      const locationIndex = locations.findIndex(
        (location) => location.id === id
      );
      if (locationIndex === -1) {
        throw new Error("Location not found");
      }
      const updatedLocation = (locations[locationIndex] = {
        ...locations[locationIndex],
        ...data,
      });
      return updatedLocation;
    },
    deleteLocation: (parent, { id }) => {
      const locationIndex = locations.findIndex(
        (location) => location.id === id
      );
      if (locationIndex === -1) {
        throw new Error("Location not found!");
      }
      const deletedLocations = locations[locationIndex];
      locations.splice(locationIndex, 1);
      return deletedLocations;
    },
    deleteAllLocations: () => {
      const length = locations.length;
      locations.splice(0, length);

      return {
        count: length,
      };
    },
  },
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
