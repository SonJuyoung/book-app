import styled, {css} from "styled-components";

const PStyled = styled.p`
padding: 10px;
border: 1px solid lightgrey;
background: #f0f0f0;
border-radius: 6px;
${props => {
    if (props.type === 'error')
        return css`
        border-color: transparent;
        background-color: Tomato;
        color: white;
        `;
}}
`

function Message({error, type}) {
    return (
        <>
            {error && (
                <p className={type}>{error}</p>
            )}
            </>
    );
}

export default Message;