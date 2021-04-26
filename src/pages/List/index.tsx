import React, { useMemo, useState, useEffect } from 'react'; 
import { Container, Content, Filters } from './styles';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains'; 
import expenses from '../../repositories/expenses'; 

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
} 

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData>([]);

    const { type } = match.params;

    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    },[type]);

    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    },[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type])

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

    useEffect(() => {
        listData.map(item => {
            return {
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dateFormatted: item.date,
                tagColor: '#4e41f0',
            }
        })
        setData(listData);
    },[]);

    return(
        <Container>
        <ContentHeader title={title} lineColor={lineColor}>
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