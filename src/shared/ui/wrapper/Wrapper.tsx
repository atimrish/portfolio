import styled from "styled-components";
import {PropsWithChildren} from "react";

const Container = styled.div`
    width: clamp(292px, 91.25vw, 1274px);
    margin: 0 auto;
`

export const Wrapper = (p: PropsWithChildren) => {
    return (
        <Container>{p.children}</Container>
    );
};