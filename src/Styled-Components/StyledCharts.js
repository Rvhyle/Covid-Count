import styled from 'styled-components';
import { Home } from './StyledHome';

export const StyledCharts = styled(Home)`
width:95%;
padding-bottom:2rem;
margin:auto;
.title {
    padding-bottom:5rem;
}
.charts{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    column-gap:50px;
}
.chart{
    height:650px;
    width:650px;
}

/* Mobile Screens */
@media screen and (max-width:767px) {
    .chart {
        height:200px;
    }
    .charts{
        row-gap:100px;
    }
}
`