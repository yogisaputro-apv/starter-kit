import { getDatabaseContext } from '../../../database';
import { GraphQLQueryResolvers } from '../definitions';

const query: GraphQLQueryResolvers['listLives'] = async root => {
    const { collections } = await getDatabaseContext();

    return collections.lives.find().toArray();
};

export default query;
