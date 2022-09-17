import { Button, Container, Grid } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export const ButtonCategory = ({category,icon}) => {
    return (
        <>
            <Grid>
                <Button  size='40' css={{paddingTop:'5px',bg:"transparent",color:'black'}}>
                    <Container display="flex" direction="column">
                        <FontAwesomeIcon icon={icon} size="xl"/>
                        {category}
                    </Container>
                </Button>
            </Grid>
        </>
    )
}
