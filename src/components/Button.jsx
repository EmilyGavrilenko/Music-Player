import Button from "@mui/material/Button";

export default function PrimaryButton({ children, variant, startIcon, disabled, onClick }) {
    let sx = {};

    if (variant === "primary") {
        sx = {
            backgroundColor: "#8315f9"
        };
    } else if (variant === "secondary") {
        sx = {
            "color": "#8315f9",
            "borderColor": "#8315f9",
            "backgroundColor": "white",
            "&:hover": {
                backgroundColor: "#8315f9",
                color: "white"
            }
        };
    } else if (disabled) {
        sx = {
            "&.Mui-disabled": {
                color: "#A9A9A9", // Grey text color
                borderColor: "#DCDCDC", // Light grey border color
                backgroundColor: "#F5F5F5" // Light grey background color
            }
        };
    }

    return (
        <Button
            component="label"
            variant="contained"
            startIcon={startIcon}
            sx={sx}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}
