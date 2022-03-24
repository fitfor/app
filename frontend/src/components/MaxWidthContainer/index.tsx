import styled from "styled-components"

function MaxWidthContainer(maxWidth: number) {
    return styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${maxWidth}px;
  `
}

export default MaxWidthContainer