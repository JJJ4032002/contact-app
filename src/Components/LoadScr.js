import styled from "styled-components";
import { motion } from "framer-motion";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const LoadScrSC = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
`;

export default function LoadScr(){
    return(
        <LoadScrSC>
            <ClimbingBoxLoader color='white'/>
        </LoadScrSC>
    )
}