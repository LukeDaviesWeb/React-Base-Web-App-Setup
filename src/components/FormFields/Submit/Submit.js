import React from "react"
import { ButtonStyled } from './styled'

export const Submit = ({
    type,
    text,
    isSubmitting,
    searchStyle,
    refineResults,
    fullWidth,
    ...props
}) => {

    return (
        <ButtonStyled
            type={type || "submit"}
            disabled={isSubmitting}
            disablePointer={isSubmitting}
            disabledStyle={isSubmitting}
            refineResults={refineResults}
            fullWidth={fullWidth}
            whileHover={{
                backgroundColor: "#ff8640",
            }}
            transition={{
                duration: 0.3
            }}
            {...props}
        >
            {isSubmitting
                ? props.submittingText || "Submitting..."
                : text
                    ? text
                    : "Submit"}
        </ButtonStyled>
    )
}
