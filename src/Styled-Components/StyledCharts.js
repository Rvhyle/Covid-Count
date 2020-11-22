import styled from 'styled-components';
import { Home } from './StyledHome';

export const StyledCharts = styled(Home)`
width:95%;
margin:auto;
.title {
    padding-bottom:5rem;
}
.charts{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    column-gap:200px;
}
.chart{
    height:650px;
    width:650px;
}
`