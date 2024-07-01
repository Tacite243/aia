import { Button } from '@mui/material';



export default function Boutton({ text, type }) {
    return (
        <Button
            type={type}
            variant="contained"
            color="primary"
            className="form-button"
        >
            {text}
        </Button>
    )
}