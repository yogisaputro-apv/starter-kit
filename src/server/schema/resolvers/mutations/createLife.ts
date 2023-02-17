import { ObjectId } from 'mongodb';
import { getDatabaseContext, Life } from '../../../database';
import { GraphQLMutationResolvers } from '../definitions';

const mutation: GraphQLMutationResolvers['createLife'] = async (
    root,
    { firstName, lastName, birthday, description, hobbies, title }
) => {
    const { collections } = await getDatabaseContext();

    const document: Life = {
        _id: new ObjectId(),
        firstName,
        lastName,
        hobbies,
        birthday,
        description,
        title,
    };

    await collections.lives.insertOne(document);

    return document;
};

export default mutation;
