import { Box, Stack } from "@mui/material"
import not_found from '../../assets/not_found.png'



const Not_Found = () => {
    return (
        <Stack sx={{ margin: "auto",maxWidth:"50%"}}>

            <Box component="img" src={not_found} sx={{ height: "500px", width: "500px" }} />
        </Stack>

    )
}
export default Not_Found;