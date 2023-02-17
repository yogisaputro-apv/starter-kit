import { useListLivesQuery } from '../../../api';
import NoItemResult from '../../../components/results/NoItemResult';

const DisplayLife = () => {
    const { data, loading } = useListLivesQuery();
    const lifeList = data?.lives || [];

    if (loading) {
        // not yet loaded
        return null;
    }

    if (lifeList.length === 0) {
        return <NoItemResult />;
    }

    const displayLives = lifeList.map(life => (
        <li key={life.id}>
            {life.id} {life.title} {life.fullName}
        </li>
    ));

    return <div>{displayLives}</div>;
};

export default DisplayLife;
