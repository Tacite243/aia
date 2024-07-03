import { Button } from '@mui/material';



export default function Boutton({ text, type, click }) {
    return (
        <Button
            type={type}
            variant="contained"
            color="primary"
            className="form-button"
            onClick={click}
        >
            {text}
        </Button>
    )
}