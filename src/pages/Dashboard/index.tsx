import React from 'react'; 
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';

import SelectInput from '../../components/SelectInput';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Rogrido', label: 'Oliveira'},
        {value: 'Rogrido', label: 'Oliveira'},
        {value: 'Rogrido', label: 'Oliveira'}
    ]

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#000000">
                <SelectInput options={options} />
            </ContentHeader>
        </Container>
    );
}

export default Dashboard;