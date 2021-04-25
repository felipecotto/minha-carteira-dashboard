import React from 'react'; 
import { Container } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';

const List: React.FC = () => {

    const options = [
        {value: 'Rogrido', label: 'Oliveira'},
        {value: 'Rogrido', label: 'Oliveira'},
        {value: 'Rogrido', label: 'Oliveira'}
    ]

    return(
        <Container>
        <ContentHeader title="Listagem" lineColor="#ffffff">
            <SelectInput options={options} />
        </ContentHeader>
    </Container>
    );
}

export default List;