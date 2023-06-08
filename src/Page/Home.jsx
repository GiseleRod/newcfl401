import { Box } from "@mui/material"
import Carrousel from "../components/Carrousel"


const Home =()=>{
    return(
        
        <Box sx={
        {backgroundColor:"#F2F2F2",
        height:"600px" 
        }}>
          <Carrousel></Carrousel>

        </Box>
     
    )
   
}
export default Home