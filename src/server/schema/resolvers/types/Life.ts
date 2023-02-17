import { GraphQLLifeResolvers } from '../definitions';

const LifeGraphQL: GraphQLLifeResolvers = {
    id: root => root._id,
    firstName: root => root.firstName,
    lastName: root => root.lastName,
    fullName: root => `${root.firstName} ${root.lastName}`,
    birthday: root => root.birthday,
    hobbies: root => root.hobbies,
    title: root => root.title,
    description: root => root.description,
};

export default LifeGraphQL;
