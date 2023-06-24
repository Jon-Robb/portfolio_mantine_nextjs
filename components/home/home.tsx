import { Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SkillBadge from '../SkillBadge/SkillBadge';
import useStyles from './home.styles';

export default function Home() {
    const { t } = useTranslation();
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper}>
            <Title order={1}> {t('welcome')} </Title>
            <Text> {t('welcome2')} </Text>
            <div>
                <SkillBadge />
            </div>
        </div>
    );
}
