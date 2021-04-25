import React from 'react'; 
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

const List: React.FC = () => {

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'}
    ]

    const years = [
        {value: 2019, label: '2019'},
        {value: 2020, label: '2020'},
        {value: 2021, label: '2021'}
    ]

    return(
        <Container>
        <ContentHeader title="Listagem" lineColor="#ffffff">
            <SelectInput options={months} />
            <SelectInput options={years} />
        </ContentHeader>
        <Filters>
            <button type="button" className="tag-filter tag-filter-recurrent">Recorrentes</button>
            <button type="button" className="tag-filter tag-filter-eventual">Eventuais</button>
        </Filters>
        <Content>
            <HistoryFinanceCard tagColor="#E44c4e" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 123,99" />
            <HistoryFinanceCard tagColor="#4E41F0" title="Conta de Luz" subtitle="27/07/2020" amount="R$ 123,99" />
            
        </Content>
    </Container>
    );
}

export default List;