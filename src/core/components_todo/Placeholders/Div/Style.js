
import { makeStyles } from '@material-ui/core/styles';

const Style = makeStyles((theme) => ({
    placeholderDiv: {
        width: '100%',
        height: '50px'
    },
    animatedBackground: {

    }
}));

export default Style


/*
.placeholder {
 margin: 0 auto;
 max-width: 200px;
 min-height: 100px;
 background-color: #eee;
}

@keyframes placeHolderShimmer{
    0%{
        background-position: -468px 0
    }
    100%{
        background-position: 468px 0
    }
}

.animated-background {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: darkgray;
    background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
    background-size: 800px 104px;
    height: 100px;
    position: relative;
}
*/