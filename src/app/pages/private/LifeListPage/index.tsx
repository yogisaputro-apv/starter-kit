import { useTranslation } from 'react-i18next';
import ConsolePageWithHeader from '../../../layouts/ConsoleLayout/ConsolePageWithHeader';
import DisplayLife from './displayLife';

const LifeListPage = () => {
    const { t } = useTranslation('lifeList');

    return (
        <ConsolePageWithHeader subTitle={t('lifeList:display.subtitle')} title={t('lifeList:display.title')}>
            <DisplayLife />
        </ConsolePageWithHeader>
    );
};

export default LifeListPage;
